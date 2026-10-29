import { useState } from "react";
import "./styles.css";

const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editing, setEdit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  return (
    <>
      {editing ? (
        <div className="mainDiv">
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                pattern="[A-Z].+"
                title="Please ensure the first name starts with a capital letter"
                required
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="0[0-9]{9}"
                title="Enter a 10-digit South African number beginning with 0"
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="displayDiv">
          <div className="displayItem">Name: {name}</div>
          <div className="displayItem">Email: {email}</div>
          <div className="displayItem">Phone number: {phone}</div>

          <button type="button" onClick={() => setEdit(!editing)}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default General;
