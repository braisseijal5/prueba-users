import { createContext } from "react";
import { conf } from "../conf";
import { User, UserApi } from "../types/entities";

export interface BackendContext {
  getUsers: () => any;
}

const BackendContext = createContext<BackendContext>({} as any);

const apiUrl = conf.API_URL;

export const useBackend = () => {
  const getUsers = async (): Promise<any> => {
    let result: any;
    try {
      const res = await fetch(apiUrl + "?results=50");
      console.log(res);
      if (!res.ok) {
        throw new Error(JSON.stringify(res));
      }
      result = await res.json();
      console.log(result);
    } catch (error) {
      throw Error(`Error fetching`);
    }
    let usersArr: User[] = [];
    result.results.map((res: UserApi) => {
      let user: User = {
        id: res.id.value,
        email: res.email,
        firstName: res.name.first,
        lastName: res.name.last,
        city: res.location.city,
        country: res.location.country,
        postcode: res.location.postcode,
        state: res.location.state,
      };
      usersArr.push(user);
    });

    return usersArr;
  };
  return {
    getUsers,
  };
};
