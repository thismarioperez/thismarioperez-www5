export const AllNavigations = `
query {
  navigations{
    data {
      id
      attributes {
        slug
      }
    }
  }
}
`;

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