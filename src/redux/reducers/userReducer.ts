import { Person } from "../../utils/interfaces";
import { DELETE_USER, GET_USERS, UPDATE_USER_INFO } from "../actions/types";

interface InitialStateProps {
  list: Person[];
}

interface ActionProps {
  type: string;
  payload: Person[] | Person;
}

const initialState: InitialStateProps = {
  list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      if (Array.isArray(payload)) {
        return {
          ...state,
          list: [...payload],
        };
      } else {
        state.list.push(payload);
        return {
          ...state,
          list: [...state.list],
        };
      }
    case UPDATE_USER_INFO:
      const selectedUser = state.list.find(({ id }) => {
        if (Array.isArray(payload)) {
          return false;
        }
        return id === payload.id;
      });
      if (selectedUser) {
        selectedUser.firstName = payload.firstName;
        selectedUser.lastName = payload.lastName;
        selectedUser.email = payload.email;
        selectedUser.location = payload.location;
      }
      return {
        ...state,
        list: [...state.list],
      };
    case DELETE_USER:
      const filteredUsers = state.list.filter(({ id }) => id !== payload);

      return {
        ...state,
        list: filteredUsers,
      };
    default:
      return state;
  }
}
