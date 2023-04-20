import React, { useState } from "react";
import { Person } from "../../utils/interfaces";
import Modal from "../utils/modal";
import EditForm from "./EditUser";
import Button from "../utils/forms/Button";
import { deleteUser } from "../../redux/actions/userAction";
import { connect } from "react-redux";

const User = ({
  deleteSelectedUser,
  userProps,
}: {
  deleteSelectedUser: Function;
  userProps: Person;
}) => {
  const { firstName, lastName, email, location, image } = userProps;
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isVerificationOpen, setIsVerficationOpen] = useState(false);

  const handleCloseModal = () => {
    setIsEditFormOpen(false);
  };

  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>
        <img src={image} alt={`${firstName} ${lastName}`} />
      </td>
      <td>{location}</td>
      <td>{email}</td>
      <td
        onClick={() => {
          setIsEditFormOpen(true);
        }}
      >
        Edit
      </td>
      <td
        onClick={() => {
          setIsVerficationOpen(true);
        }}
      >
        Delete
      </td>
      <Modal isOpen={isVerificationOpen} onClose={() => {}}>
        <div>
          <div>Are you sure?</div>
          <Button
            onClick={() => {
              deleteSelectedUser(userProps.id);
              setIsVerficationOpen(false);
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setIsVerficationOpen(false);
            }}
          >
            No
          </Button>
        </div>
      </Modal>
      <Modal isOpen={isEditFormOpen} onClose={handleCloseModal}>
        <EditForm user={userProps} />
        <Button onClick={handleCloseModal} backgroundColor="red">
          Close
        </Button>
      </Modal>
    </tr>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteSelectedUser: (userId: string) => dispatch(deleteUser(userId)),
  };
};
const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
