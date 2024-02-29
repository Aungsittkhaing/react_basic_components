import React, { useEffect, useState } from "react";
import User from "./components/users/User";
import Img from "./components/users/img/profie.svg";
import AddUser from "./components/users/AddUser";
const App = () => {
  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((users) => {
        let rawUsers = users.results;
        let filteredUsers = rawUsers.map((usr) => {
          return {
            uuid: usr.login.uuid,
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone: usr.phone,
            cell: usr.cell,
            image: usr.picture.thumbnail,
          };
        });
        console.log(filteredUsers);

        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  //remove user
  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter((usr) => usr.uuid != uuid);
    setUsers(remainUsers);
  };
  //add user
  const addUserHandler = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  };
  //show form
  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="container">
      <h4 className="text-blue-600 font-mono font-bold text-2xl my-2 mx-2 text-center">
        User Lists
      </h4>
      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white py-2 px-2  rounded-lg mx-2 mb-2"
          onClick={showFormHandler}
        >
          Add New
        </button>
      </div>
      {showForm && <AddUser addUser={addUserHandler} />}
      {users.map((usr) => (
        <User key={usr.uuid} data={usr} remove={removeUserHandler} />
      ))}
    </div>
  );
};

export default App;
