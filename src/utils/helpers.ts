export const modifyUserDetails = (results: any) => {
  const modifiedList = results.map(
    ({
      name: { first, last },
      picture: { medium },
      location: {
        country,
        city,
        street: { name: streetName },
      },
      email,
      id: { value },
    }: any) => {
      return {
        firstName: first,
        lastName: last,
        image: medium,
        location: `${country}, ${city}, ${streetName}`,
        id: value,
        email,
      };
    }
  );
  return modifiedList;
};
