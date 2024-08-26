import { useState } from "react";
import { format } from "date-fns";

let jobId = 5;

function PracticalExp() {
  const initialData = [
    {
      company: "Donner's Bakery",
      position: "General Staff",
      tasks:
        "Cleaning the restroom\nDeliver orders to customers\nUsing mixer to make dough for bread",
      start: new Date(2010, 4, 1),
      end: new Date(2018, 4, 1),
      id: 1,
    },
    {
      company: "Self-Employed",
      position: "Cat Finder",
      tasks: "Find missing cats around the town neighborhood",
      start: new Date(2018, 4, 8),
      end: new Date(2019, 1, 1),
      id: 2,
    },
  ];
  const blankJob = {company:"-", position: "-", tasks:"",start:null,end:null}

  const [formOpen, setFormOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [datas, setDatas] = useState(initialData.slice());
  const [editDatas, setEditDatas] = useState(initialData.slice());
  const [job, setJob] = useState({...blankJob});

  function handleEditMode() {
    setIsEdit(true);
    setFormOpen(false);
  }

  function handleOpenForm() {
    setFormOpen(true);
    setJob({...blankJob})
  }

  function handleFormChange(e) {
    const newJob = {...job, [e.target.name] : e.target.value};
    setJob(newJob);
  }

  function handleAddJob(e) {
    e.preventDefault();
    const listCopy = editDatas.slice();
    jobId++;
    listCopy.push({...job,id: jobId});
    setEditDatas(listCopy);
    setFormOpen(false);
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
          <div className="job" key={data.id}>
            <p className="title">{data.position}</p>
            <div className="companyndate">
              <p>{data.company}</p>
              <p>
                ( {data.start === null ? "" : format(data.start, "dd/MM/yy")} -{" "}
                {data.end === null ? "" : format(data.end, "dd/MM/yy")} )
              </p>
            </div>
            <div className="tasks">
              <p>Responsibilites:</p>
              {data.tasks.split("\n").map((task, index) => {
                  return (
                    <div key={index}>
                      <p>•</p>
                      <p>{task}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );

  const form = (
    <form className="jobform" onSubmit={handleAddJob}>
      <div className="inputs">
        <label>
          Position Title
          <input type="text" name="position" onChange={handleFormChange} />
        </label>
        <label>
          Company Name
          <input type="text" name="company" onChange={handleFormChange} />
        </label>
        <label>
          Start Date
          <input type="date" name="start" onChange={handleFormChange} />
        </label>
        <label>
          End Date
          <input type="date" name="end" onChange={handleFormChange} />
        </label>
        <label className="taskbox">
        Add your responsibilites here (separate each by new line)
        <textarea name="tasks" onChange={handleFormChange} />
      </label>
      </div>
      <button type="submit">ADD</button>
    </form>
  )

  const editor = (
    <div className="editor">
      <div className="joblist">
        <div className="joblistheader">
          <p>POSITION</p>
          <p>COMPANY</p>
          <p>START</p>
          <p>END</p>
          <p>TASKS</p>
          <p></p>
        </div>
        <hr></hr>
        {editDatas.map((data) => {
          return (
            <div className="joblistitem" key={data.id}>
              <p>{data.position}</p>
              <p>{data.company}</p>
              <p>
                {data.start === null ? "-" : format(data.start, "dd/MM/yy")}
              </p>
              <p>{data.end === null ? "-" : format(data.end, "dd/MM/yy")}</p>
              <div className="joblisttasks">
                {data.tasks.split("\n").map((task, index) => {
                  return (
                    <div key={index}>
                      <p>•</p>
                      <p>{task}</p>
                    </div>
                  );
                })}
              </div>
              <button onClick={() => {handleRemove(data.id)}}>REMOVE</button>
            </div>
          );
        })}
      </div>
      {formOpen? form : (<button className="addjobbutton" onClick={handleOpenForm}>ADD</button>) }
      <hr></hr>
      <div className="btncontainer">
        <button onClick={handleRevertData}>CANCEL</button>
        <button onClick={handleUpdateData}>SAVE</button>
      </div>
    </div>
  );

  return (
    <div className="practicalexp">
      <div className="sectionhead">
        <p>PRACTICAL EXPERIENCE</p>
        <button onClick={handleEditMode} disabled={isEdit}>
          EDIT
        </button>
      </div>
      <hr></hr>
      {isEdit ? editor : results}
    </div>
  );
}

export default PracticalExp;
