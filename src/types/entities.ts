export interface UserApi {
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    country: string;
    state: string;
  };
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  state: string;
}
