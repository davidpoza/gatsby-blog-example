const path = require('path');
const { execSync } = require('child_process');
const { URL_TAG_FOR_CATEGORIES, URL_TAG_FOR_TAGS, URL_TAG_FOR_BLOG} = require ('./src/shared/config/config');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.dirname(node.fileAbsolutePath).split('/').pop();
    createNodeField({
	    node,
		  name: 'slug',
		  value: slug,
	  });
		const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
		createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const res = await graphql(`
	query {
	    allMarkdownRemark {
				edges {
					node {
						fields {
					    slug
							gitAuthorTime
					  }
						frontmatter {
							category
							tags
						}
					}
				}
			}
		}
		`);

	const posts = res?.data?.allMarkdownRemark.edges;

		// create post pages
	const blogTemplate = path.resolve('./src/components/blogEntryTemplate/index.jsx');
	const pageTemplate = path.resolve('./src/components/pageTemplate/index.jsx');
  posts.forEach((edge) => {
		const { slug } = edge.node.fields;
		console.log("✅creating page", slug);
		createPage({
			component: edge.node.frontmatter.category ? blogTemplate : pageTemplate,
			path: `${URL_TAG_FOR_BLOG}${slug}`,
			context: {
				slug
			}
		});
	});

	// create categories pages
	const categoryTemplate = path.resolve('./src/components/categoryTemplate/index.jsx');
	const categories = [];
	posts.forEach((edge) => {
		const category = edge.node.frontmatter.category;
    if (category && !categories.includes(category)) categories.push(category);
	});

	categories.forEach((cat) => {
		console.log("✅creating category", cat);
		createPage({
	    component: categoryTemplate,
		  path: `${URL_TAG_FOR_CATEGORIES}${cat}`,
		  context: {
		    category: cat
		  }
	  });
	});

	// create tags pages
	const tagTemplate = path.resolve('./src/components/tagTemplate/index.jsx');
	const tags = [];

	posts.forEach((edge) => {
		const articleTags = edge.node.frontmatter.tags;
		articleTags?.forEach((tag) => {
			if (!tags.includes(tag)) tags.push(tag);
		});
	});

	tags.forEach((tag) => {
		console.log("✅creating tag", tag);
		createPage({
	    component: tagTemplate,
		  path: `${URL_TAG_FOR_TAGS}${tag}`,
		  context: {
		    tag
		  }
	  });
	});
}
