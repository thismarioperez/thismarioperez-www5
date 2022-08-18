
export const AllPages = `
query {
    pages{
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`;

export const PageBySlug = `
query($SLUG: String!) {
  pages: pages(filters: { slug: { eq: $SLUG } }) {
    data {
      id
      attributes {
        title
        slug
        publishedAt
        blocks {
          __typename
          ... on PageBlocksDynamicZone {
            ... on ComponentBlocksHero {
              id
              backgroundColor {
                value
              }
              title
              subtitle
              content
              buttons {
                __typename
                label
                target
                href
                color {
                  value
                }
              }
            }
            ... on ComponentBlocksInterior {
              id
              backgroundColor {
                value
              }
              title
              subtitle
              content
            }
            ... on ComponentBlocksProjectsList {
              projects {
                data {
                  __typename
                  id
                  attributes {
                    title
                    content
                    links {
                      label
                      target
                      href
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
