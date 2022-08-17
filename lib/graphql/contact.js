export const AllContact = `
query {
	contact {
    data {
      attributes {
        email
        phone
        socials {
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  }
}
`;
