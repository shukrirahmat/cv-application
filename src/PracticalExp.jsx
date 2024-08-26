import { useState } from "react";
import { format } from "date-fns";

function PracticalExp() {
  const initialData = [
    {
      company: "Donner's Bakery",
      position: "General Staff",
      tasks:
        "Clean the restroom\nDeliver orders to customer\nUsing mixer to make dough for bread",
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

  const [isEdit, setIsEdit] = useState(false);
  const [datas, setDatas] = useState(initialData.slice());

  const results = (
    <div className="sectiondata">
      {datas.map((data) => {
        return (
          <div className="job" key={data.id}>
            <p className="title">{data.position}</p>
            <div className="companyndate">
              <p>{data.company}</p>
              <p>
              ( {data.start === null? '' : format(data.start, 'dd/MM/yy')} - {data.end === null? '' : format(data.end, 'dd/MM/yy')} )
              </p>
            </div>
            <div className="tasks">
              <p>Responsibilites:</p>
              {data.tasks.split("\n").map( (task,index) => {
                return <p key={index}>• {task}</p>
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  const editor = (
    <div className="editor">EDITOR</div>
  )

  return (
    <div className="practicalexp">
      <div className="sectionhead">
        <p>PRACTICAL EXPERIENCE</p>
        <button onClick={() => setIsEdit(true)} disabled={isEdit}>EDIT</button>
      </div>
      <hr></hr>
      {isEdit ? editor : results}
    </div>
  );
}

export default PracticalExp;
