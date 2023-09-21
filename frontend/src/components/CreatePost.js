import React, { useState } from "react";
import CreateSearchBox from "./CreateSearchBox";
import axios from "axios";

function CreatePost() {
  // const [data, setData] = useState({
  //   lat: "",
  //   long: "",
  // });
  const [userData, setUserData] = useState({
    carName: "",
    fileName: "",
    address: "",
  });

  // for converting image into base64 i.e basically a stirng
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("carname", userData.carName);
    const base64 = await convertBase64(userData.fileName);
    //console.log(base64);
    form.append("file", base64);
    form.append("address_lat", userData.address[0].lat);
    form.append("address_lng", userData.address[0].lng);
    form.append("address", userData.address[1]);
    console.log("address_lat", userData.address[0].lat);
    console.log("address_lng", userData.address[0].lng);
    const response = await axios.post("http://localhost:8000/createPost", form);
    console.log(response);
  }
  const handleCallback = (childData) => {
    console.log("called handleCallback");
    setUserData({ ...userData, address: childData });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setUserData({ ...userData, fileName: file });
  };

  return (
    <div>
      <h1>CreatePost</h1>
      <div>
        <form encType="mutlipart/form-data" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="carName"
            onChange={(e) => {
              setUserData({ ...userData, carName: e.target.value });
            }}
          />
          <CreateSearchBox parentCallback={handleCallback} />
          <input type="file" onChange={handleFileChange}></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
