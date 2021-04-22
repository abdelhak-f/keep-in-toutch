import React, { useState } from "react";
import axios from "axios";

function CreateClient() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/postclient", input)
      .then((res) => {
        console.log("send data");
      })
      .catch((error) => console.log(error));
      setInput({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
      })
  }

  return (
    <div className="container">
      <h1> Contact Us</h1>
      <form>
        <div className="form-group">
          <label for="validationCustom01">First name</label>
          <input
            onChange={(event) => handleChange(event)}
            name="fname"
            value={input.fname}
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <label for="validationCustom01">Last name</label>
          <input
            onChange={(event) => handleChange(event)}
            name="lname"
            value={input.lname}
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Last name"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            onChange={(event) => handleChange(event)}
            name="email"
            value={input.email}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="example-tel-input">Telephone</label>
          <input
            onChange={(event) => handleChange(event)}
            name="phone"
            value={input.phone}
            className="form-control"
            type="Number"
            placeholder="1-(555)-555-5555"
            id="example-tel-input"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Entre Your Message</label>
          <textarea
            onChange={(event) => handleChange(event)}
            name="message"
            value={input.message}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateClient;
