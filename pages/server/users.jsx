import React from "react";

const users = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>hello server side rendering</h1>
      {props.data.users.map((user) => (
        <li>{user.firstName}</li>
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  console.log("server side rendering is not difficut in next js ");
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
export default users;
