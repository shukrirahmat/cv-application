import { useState } from "react";
import {format} from "date-fns";

let educationId = 5;

function EducationalExp() {
  const initialdata = [
    {
      id: 1,
      school: "Hampden College",
      course: "Masters in Greek Literature",
      start: new Date(2020,6,1),
      end: new Date(2021,6,1),
    },
    {
      id: 2,
      school: "OSSU University",
      course: "Bachelors in Computer Science",
      start: new Date(2021,9,20),
      end: new Date(2021,9,20),
    },
  ];

  const blankEducation = {school:"-", course:"-", start:null, end:null}

  const [formOpen, setFormOpen] = useState(false);
  const [datas, setDatas] = useState(initialdata.slice());
  const [editDatas, setEditDatas] = useState(initialdata.slice())
  const [education, setEducation] = useState({...blankEducation});
  const [isEdit, setIsEdit] = useState(false);

  function handleEditMode() {
    setIsEdit(true);
    setFormOpen(false);
  }

  function handleFormChange(e) {
    const newEducation = {...education, [e.target.name] : e.target.value};
    setEducation(newEducation);
  }

  function handleAddEducation(e) {
    e.preventDefault();
    const listCopy = editDatas.slice();
    educationId++;
    listCopy.push({...education,id: educationId});
    setEditDatas(listCopy);
    setFormOpen(false);
  }

  function handleOpenForm() {
    setFormOpen(true);
    setEducation({...blankEducation})
  }

  function handleRemove(id) {
    const newDatas = editDatas.filter((data) => data.id !== id);
    setEditDatas(newDatas);
  }

  function handleUpdateData() {
    const newDatas = editDatas.slice();
    setDatas(newDatas);
    setIsEdit(false);
  }

  function handleRevertData() {
    const revertDatas = datas.slice();
    setEditDatas(revertDatas);
    setIsEdit(false);
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
                ( {data.start === null? '' : format(data.start, 'dd/MM/yy')} - {data.end === null? '' : format(data.end, 'dd/MM/yy')} )
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
          Start Date
          <input type="date" name="start" onChange={handleFormChange}/>
        </label>
        <label>
          End Date
          <input type="date" name="end" onChange={handleFormChange}/>
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
        {editDatas.map((data) => {
          return (
            <div className="eduitem" key={data.id}>
              <p>{data.course}</p>
              <p>{data.school}</p>
              <p>{data.start === null? '-' : format(data.start, 'dd/MM/yy')}</p>
              <p>{data.end === null? '-' : format(data.end, 'dd/MM/yy')}</p>
              <button onClick={() => handleRemove(data.id)}>REMOVE</button>
            </div>
          );
        })}
      </div>
      {formOpen? form : (<button className="addedubutton" onClick={handleOpenForm}>ADD</button>) }
      <hr></hr>
      <div className="btncontainer">
        <button onClick={handleRevertData}>CANCEL</button>
        <button onClick={handleUpdateData}>SAVE</button>
      </div>
    </div>
  );

  return (
    <div className="educationalexp">
      <div className="sectionhead">
        <p>EDUCATIONAL EXPERIENCE</p>
        <button onClick={handleEditMode} disabled={isEdit}>EDIT</button>
      </div>
      <hr></hr>
      {isEdit ? editor : results}
    </div>
  );
}

export default EducationalExp;
