import React from 'react';
import { graphql } from 'gatsby';
import FrontLayout from 'src/components/layouts/front';
import CategoryList from 'src/components/categoryList'

export default function TagTemplate({ data, pageContext }) {
  const posts = data?.allMarkdownRemark.edges;
  return (<FrontLayout>
    <CategoryList injectedPosts={posts} tag={pageContext.tag} disableShowMore />
  </FrontLayout>);
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark (
      filter: { frontmatter: { tags: { eq: $tag } } }
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
            tags
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
