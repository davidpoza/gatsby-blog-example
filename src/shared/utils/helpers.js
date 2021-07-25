export function parseBlogPost(post) {
  const obj = {
    title: post.node.frontmatter?.title,
    date: post.node.frontmatter?.date,
    tableOfContents: post.node?.tableOfContents,
    modificationDate: post.node.frontmatter?.modDate || post.node?.fields?.gitAuthorTime,
    category: post.node?.frontmatter?.category,
    author: post.node?.frontmatter?.author,
    coverImageData: post.node?.frontmatter?.coverImage?.childrenImageSharp?.[0].gatsbyImageData,
    tags: post.node?.frontmatter?.tags,
    html: post.node?.html,
    slug: post.node?.fields?.slug,
    excerpt: post.node?.frontmatter?.excerpt || post.node.excerpt,
    resizedImage: post.node?.frontmatter?.coverImage?.childImageSharp?.ogImage?.src,
    disabledToc: post.node?.frontmatter?.disabledToc || false,
  };
  Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : {});
  return obj;
}
