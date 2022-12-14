
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
              heroBackgroundColor: backgroundColor
              title
              subtitle
              content
              tall
              buttons {
                __typename
                label
                target
                href
                color
                type
                round
                contained
                hollow
              }
            }
            ... on ComponentBlocksInterior {
              id
              interiorBackgroundColor: backgroundColor
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
                    image {
                      data {
                        id,
                        attributes {
                          name,
                          alternativeText,
                          caption,
                          width,
                          height,
                          formats,
                          url,
                          previewUrl,
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
  }
}
`;

export const HomePage = `
query {
    homePage {
      data {
        attributes {
          title
          header
          subheader
          content
          buttons {
            label
            href
            hollow
            target
            contained
            color
            id
            round
            type
          }
        }
      }
    }
  }  
`;
