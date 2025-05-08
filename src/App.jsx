import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const urlGet = "https://jsonplaceholder.typicode.com/comments";
const urlPost = "https://jsonplaceholder.typicode.com/posts";

//axios get
function App() {
  const getUserAll = async () => {
    const response = await axios.get(urlGet);
    console.log("responseGet", response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(urlGet + "?id=" + userId);
    console.log("responseGet", response.data);
  };

  //axios post

  const createUser = async (newUser) => {
    //post veri eklemek için kullanılır.
    const response = await axios.post(urlPost, newUser);
    console.log("responsePost", response.data);
  };

  //axios put

  const userUpdate = async (id, updatedData) => {
    //post veri eklemek için kullanılır.
    const response = await axios.put(urlPost + "/" + id, updatedData);
    console.log("responseUpdate", response.data);
  };

  //axios delete

  const userDelete = async (id) => {
    const response = await axios.delete(urlPost + "/" + id);
    console.log("responseDelete", response.data);
  };

  useEffect(() => {
    //getUserAll();

    //getUserById(1);

    // const newUser = {
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // };
    // createUser(newUser);

    // userUpdate(1, {
    //   title: "dss",
    //   body: "ghh",
    //   userId: 6,
    // });

    userDelete(1);
  }, []);

  return <div>Api Axios Methods</div>;
}

export default App;
