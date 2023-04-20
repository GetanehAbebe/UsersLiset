import React, { ChangeEvent, useState } from "react";
import { Person, EditedPerson } from "../../utils/interfaces";
import Input from "../utils/forms/Input";
import { connect } from "react-redux";
import { updateUserInfo } from "../../redux/actions/userAction";
import Button from "../utils/forms/Button";

const EditForm = ({
  user,
  updateInfo,
}: {
  user: Person;
  updateInfo: Function;
}) => {
  const { firstName, lastName, email, location, id } = user;
  const [editedDetails, setEditedDetails] = useState<EditedPerson>({
    firstName,
    lastName,
    location,
    email,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  return (
    <form>
      <Input
        value={editedDetails.firstName}
        onChange={handleChange}
        name={"firstName"}
        label={"First name"}
      />
      <Input
        value={editedDetails.lastName}
        onChange={handleChange}
        name={"lastName"}
        label={"Last name"}
      />
      <Input
        value={editedDetails.email}
        onChange={handleChange}
        name={"email"}
        label={"Email"}
      />
      <Input
        value={editedDetails.location}
        onChange={handleChange}
        name={"location"}
        label={"Location"}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          updateInfo({ ...user, ...editedDetails });
        }}
      >
        Save changes
      </Button>
    </form>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInfo: (user: Person) => dispatch(updateUserInfo(user)),
  };
};
const mapStateToProps = (state: any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
