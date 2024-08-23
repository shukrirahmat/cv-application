function EducationalExp() {
  const initialdata = [
    {id: 1, school: 'Hampden University', course: 'Masters in Greek Literature', start: 2020, end: 2021},
    {id: 2, school: 'OSSU University', course: 'Bachelors in Computer Science', start: 2021, end: 2024},
  ];

  const isEdit = false;

  const results = (
    <div className="sectiondata">
        {initialdata.map((data) => {
            return (
                <div className="education" key={data.id}>
                    <p className="course">{data.course}</p>
                    <div className="schoolndate">
                        <p>{data.school}</p>
                        <p>{data.start} - {data.end}</p>
                    </div>
                    </div>
            )
        })}
    </div>
  )

  return (
    <div className="educationalexp">
      <div className="sectionhead">
        <p>EDUCATIONAL EXPERIENCE</p>
        <button>EDIT</button>
      </div>
      <hr></hr>
      {isEdit? null : results}
    </div>
  );
}

export default EducationalExp;
