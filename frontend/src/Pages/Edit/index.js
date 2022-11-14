import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

export default function Edit() {
  const [Data, setData] = useState([]);
  const [form, setForm] = useState(Data);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/detailBook/${id}`
      );
      setData(data);
      setForm(data);
    };
    fetch();
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const editBook = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/editBook/${id}`, {
      form,
    });
  };
  function submitForm(e) {
    editBook();
    navigate("/");
  }
  return (
    <div className="edit_form">
      <form onSubmit={submitForm}>
        <div className="formElements">
          <input
            type="text"
            name="bookName"
            defaultValue={Data.bookName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="authorName"
            defaultValue={Data.authorName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="publishYear"
            defaultValue={Data.publishYear}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            defaultValue={Data.price}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
