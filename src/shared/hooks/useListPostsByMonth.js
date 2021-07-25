import { graphql, useStaticQuery } from 'gatsby';
import dayjs from 'dayjs';
import { parseBlogPost } from 'src/shared/utils/helpers';

export default function useListPostsByMonth() {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { frontmatter: { category: { ne: null } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)?.allMarkdownRemark?.edges.map((post) => {
    return parseBlogPost(post);
  });

  const months = {};
  posts.forEach((post) => {
    const year = dayjs(post.date).format('YYYY');
    const month = dayjs(post.date).format('MM');
    if (!months[year]) months[year] = {};
    if (!months[year][month]) months[year][month] = [];
    months[year][month].push(post);
  });
  return months;
}