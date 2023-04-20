import { useEffect } from "react";
import { getUsers } from "../redux/actions/userAction";
import { connect } from "react-redux";
import User from "../components/user/User";
import { Person } from "../utils/interfaces";
const Users = ({ usersList, getUsersList }: any) => {
  useEffect(() => {
    if (!usersList || !usersList.length) {
      getUsersList(30);
    }
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>location</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usersList &&
          usersList.length &&
          usersList.map((user: Person, index: number) => {
            return <User key={`${user.id}-${index}`} userProps={user} />;
          })}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsersList: (results: number) => dispatch(getUsers(results)),
  };
};
const mapStateToProps = (state: any) => ({
  usersList: state.users.list,
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
