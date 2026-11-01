import { useState } from "react";
import "./styles.css";

const Educational = () => {
  const [education, setEducation] = useState([]);
  const [schoolName, setName] = useState("");
  const [title, setTitle] = useState("");
  const [studDateStart, setStudDateStart] = useState("");
  const [studDateEnd, setStudDateEnd] = useState("");
  const [editing, setEdit] = useState(true);
  const [editExisting, setEditExisting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEducation = {
      id: crypto.randomUUID(),
      schoolName,
      title,
      studDateStart,
      studDateEnd,
    };
    setEducation((prevEducation) => [...prevEducation, newEducation]);
    setName("");
    setTitle("");
    setStudDateStart("");
    setStudDateEnd("");
  };

  const studyEdit = (studID) =>{
    // editing stuff here
  }

  const deleteEducation = (studId) =>{
    const updatedEducation = (prev) => {
      return prev.filter((study) => study.id !== studId);
    };

    setEducation(updatedEducation);
  };

  return (
    <>
      {editing ? (
        <div className="mainDiv">
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label htmlFor="schoolName">School Name:</label>
              <input
                id="schoolName"
                type="text"
                value={schoolName}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="title">Title of Study:</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="studDateStart">Study Date Start:</label>
              <input
                id="studDateStart"
                type="date"
                value={studDateStart}
                onChange={(e) => setStudDateStart(e.target.value)}
                required
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="studDateEnd">Study Date End:</label>
              <input
                id="studDateEnd"
                type="date"
                value={studDateEnd}
                min={studDateStart}
                onChange={(e) => setStudDateEnd(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setEdit(!editing)}>
              Done
            </button>
          </form>
        </div>
      ) : (
        <div className="displayDiv">
          {education.map((study) => (
            <div key={study.id} className="displayItem">
              <h3>School: {study.schoolName}</h3>
              <p>Field of study: {study.title}</p>
              <p>
                Start: {study.studDateStart} - End: {study.studDateEnd}
              </p>
              <button type="button" className="deleteButton" onClick={() => deleteEducation(study.id)}>Delete</button>
            </div>
          ))}
          <button type="button" onClick={() => setEdit(!editing)}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default Educational;
