import React, { useState } from "react";

const AddUser = (props) => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [cell, setCell] = useState([]);
  const [uuid, setUuid] = useState([]);

  const setImageHandler = (e) => {
    setImage(e.target.value);
  };

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  const setPhoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const setCellHandler = (e) => {
    setCell(e.target.value);
  };

  const setUuidHandler = (e) => {
    setUuid(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      image: image,
      phone: phone,
      cell: cell,
      uuid: uuid,
    };
    props.addUser(user);
  };

  return (
    <div className="">
      <form className="max-w-sm mx-auto" onSubmit={onSubmitHandler}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Image
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your image link"
            required
            onChange={setImageHandler}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your Name"
            onChange={setNameHandler}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your phone number"
            onChange={setPhoneHandler}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="cell" className="block mb-2 text-sm font-medium">
            Cell
          </label>
          <input
            type="text"
            id="cell"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your cell number"
            onChange={setCellHandler}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="uuid" className="block mb-2 text-sm font-medium">
            UUID
          </label>
          <input
            type="text"
            id="uuid"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your UUID"
            onChange={setUuidHandler}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
