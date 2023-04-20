import { DELETE_USER, GET_USERS, UPDATE_USER_INFO } from "./types";
import { API } from "../../config";
import { modifyUserDetails } from "../../utils/helpers";
import { Person } from "../../utils/interfaces";

export const getUsers = (usersNumber: number) => async (dispatch: any) => {
  try {
    const { results } = await fetch(`${API}/?results=${usersNumber}`).then(
      (res) => res.json()
    );

    const modifiedList = modifyUserDetails(results);
    dispatch({
      type: GET_USERS,
      payload: modifiedList,
    });
  } catch (err) {
    console.error("There is a problem with fetching data", err);
  }
};

export const deleteUser = (id: string) => (dispatch: any) => {
  dispatch({
    type: DELETE_USER,
    payload: id,
  });
};

export const updateUserInfo = (user: Person) => (dispatch: any) => {
  dispatch({
    type: UPDATE_USER_INFO,
    payload: user,
  });
};
