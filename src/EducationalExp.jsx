import { useState } from "react";

let educationId = 2;

function EducationalExp() {
  const initialdata = [
    {
      id: 1,
      school: "Hampden College",
      course: "Masters in Greek Literature",
      start: 2020,
      end: 2021,
    },
    {
      id: 2,
      school: "OSSU University",
      course: "Bachelors in Computer Science",
      start: 2021,
      end: 2024,
    },
  ];

  const [formOpen, setFormOpen] = useState(false);
  const [datas, setDatas] = useState(initialdata);
  const [education, setEducation] = useState({school:"-", course:"-", start:"-", end:"-"});

  const isEdit = true;

  function handleFormChange(e) {
    const newEducation = {...education, [e.target.name] : e.target.value};
    setEducation(newEducation);
  }

  function handleAddEducation(e) {
    e.preventDefault();
    const listCopy = datas.slice();
    educationId++;
    listCopy.push({...education,id: educationId});
    setDatas(listCopy);
    setFormOpen(false);
  }

  function handleOpenForm() {
    setFormOpen(true);
    setEducation({school:"-", course:"-", start:"-", end:"-"})
  }

  const results = (
    <div className="sectiondata">
      {datas.map((data) => {
        return (
          <div className="education" key={data.id}>
            <p className="course">{data.course}</p>
            <div className="schoolndate">
              <p>{data.school}</p>
              <p>
                {data.start} - {data.end}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const form = (
    <form className="eduform" onSubmit={handleAddEducation}>
      <div className="inputs">
        <label>
          Course Name
          <input type="text" name="course" onChange={handleFormChange} />
        </label>
        <label>
          School Name
          <input type="text" name="school" onChange={handleFormChange}/>
        </label>
        <label>
          Start Year
          <input type="number" name="start" min="1000" max={new Date().getFullYear()} onChange={handleFormChange}/>
        </label>
        <label>
          End Year
          <input type="number" name="end" min="1000" max={new Date().getFullYear()} onChange={handleFormChange}/>
        </label>
      </div>
      <button type="submit">ADD</button>
    </form>
  );

  const editor = (
    <div className="editor">
      <div className="edulist">
        <div className="eduheader">
          <p>COURSE</p>
          <p>SCHOOL</p>
          <p>START</p>
          <p>END</p>
          <p></p>
        </div>
        <hr></hr>
        {datas.map((data) => {
          return (
            <div className="eduitem" key={data.id}>
              <p>{data.course}</p>
              <p>{data.school}</p>
              <p>{data.start}</p>
              <p>{data.end}</p>
              <button>REMOVE</button>
            </div>
          );
        })}
      </div>
      {formOpen? form : (<button className="addedubutton" onClick={handleOpenForm}>ADD</button>) }
    </div>
  );

  return (
    <div className="educationalexp">
      <div className="sectionhead">
        <p>EDUCATIONAL EXPERIENCE</p>
        <button>EDIT</button>
      </div>
      <hr></hr>
      {isEdit ? editor : results}
    </div>
  );
}

export default EducationalExp;
