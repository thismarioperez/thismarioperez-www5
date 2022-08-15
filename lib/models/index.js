export const NavigationBySlug = `
query ($SLUG: String!) {
    navigations: navigations(filters: { slug: { eq: $SLUG } }) {
      data {
        id
        attributes {
          label
          slug
          publishedAt
          items {
            ... on ComponentNavigationItem {
              label
              href
              target
              style
            }
          }
        }
      }
    }
  }
`;

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
                  ... on ColorEntityResponse {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
                title
                subtitle
                content
              }
              ... on ComponentBlocksInterior {
                id
                backgroundColor {
                  ... on ColorEntityResponse {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
                title
                subtitle
                content
              }
              ... on ComponentBlocksProjectsList {
                projects {
                  data {
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