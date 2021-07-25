import { graphql, useStaticQuery } from 'gatsby';
import { parseBlogPost } from 'src/shared/utils/helpers';

export default function useTags() {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)?.allMarkdownRemark?.edges.map((post) => {
    return parseBlogPost(post);
  });

	const tags = {};
	posts.forEach((post) => {
		const articleTags = post?.tags;
		articleTags?.forEach((tag) => {
			if (!tags[tag]) tags[tag] = { tag, count: 1 };
      else tags[tag].count++;
		});
	});
  return tags;
}