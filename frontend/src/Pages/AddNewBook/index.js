import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddNewBook() {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const addNewBook = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addBook`, {
      formData,
    });
  };
  const handleSubmit = () => {
    addNewBook();
    navigate("/");
  };

  return (
    <div className="formContainer">
      <div className="formWrap">
        <div className="header">
          <h2>Add New Book</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formElements">
            <input
              type="text"
              placeholder="Enter the Name of Book"
              name="bookName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter the Name of Author"
              name="authorName"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter the Year of Book"
              name="publishYear"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter the Price of Book"
              name="price"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
