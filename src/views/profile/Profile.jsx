import React from "react";
import UserForm from "../../components/profile/UserForm";
import Settings from "../../components/profile/Settings";

const Profile = () => {
  const userDetails = {};
  return (
    <div>
      <UserForm />
      <Settings />
    </div>
  );
};

export default Profile;
