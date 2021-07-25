import React from 'react';
import { graphql } from 'gatsby';
import FrontLayout from 'src/components/layouts/front';
import CategoryList from 'src/components/categoryList'

export default function CategoryTemplate({ data, pageContext }) {
  const posts = data?.allMarkdownRemark.edges;
  return (<FrontLayout title={`Artículos sobre ${pageContext.category}`}>
    <CategoryList injectedPosts={posts} category={pageContext.category} disableShowMore />
  </FrontLayout>);
}

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark (
      filter: { frontmatter: { category: { eq: $category }} }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            excerpt
            category
            coverImage {
              childrenImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
          html
          excerpt
        }
      }
    }
  }
`
