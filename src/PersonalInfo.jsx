import phoneIcon from "./assets/images/phone.svg";
import emailIcon from "./assets/images/email.svg";
import { useState } from "react";

function PersonalInfo() {

  const initialdata = {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@gmail.com",
    phone: "123456789",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({...initialdata});
  const [editData, setEditData] = useState({...initialdata});

  function handleChange(e) {
    const newData = {...editData, [e.target.name] : e.target.value};
    setEditData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData({...editData});
    setIsEdit(false);
  }

  function handleClear(e) {
    e.preventDefault();
    const emptyData = {firstName:"", lastName:"", email:"", phone:"", about:""};
    setEditData(emptyData);
  }

  function handleRevert(e) {
    e.preventDefault();
    setEditData({...data});
    setIsEdit(false)
  }

  const form = (
    <form className="personalinfoform" onSubmit={handleSubmit}>
      <label>
        First Name
        <input type="text" name="firstName" onChange={handleChange} value={editData.firstName}/>
      </label>
      <label>
        Last Name 
        <input type="text" name="lastName" onChange={handleChange} value={editData.lastName}/>
      </label>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} value={editData.email}/>
      </label>
      <label>
        Phone Number 
        <input type="tel" name="phone" onChange={handleChange} value={editData.phone}/>
      </label>
      <label className="aboutbox">
        About You
        <textarea value={editData.about} name="about" onChange={handleChange} />
      </label>
      <div className="btncontainer">
        <button onClick={handleClear}>CLEAR</button>
        <button onClick={handleRevert}>CANCEL</button>
        <button type="submit">SAVE</button>
      </div>
    </form>
  );

  const results = (
    <div className="sectiondata">
      <p className="name">
        {data.firstName} {data.lastName}
      </p>
      <div className="contact">
        {data.email !== "" && (<p key='email'>
          <img className="icon" src={emailIcon} alt="email" /> {data.email}
        </p>)}
        {data.phone !=="" && (<p key='phone'>
          <img className="icon" src={phoneIcon} alt="phone" /> {data.phone}
        </p>)}
      </div>
      <p className="about">{data.about}</p>
    </div>
  );

  return (
    <div className="personalinfo">
      <div className="sectionhead">
        <p>PERSONAL INFO</p>
        <button disabled={isEdit} onClick={() => setIsEdit(true)}>
          EDIT
        </button>
      </div>
      <hr></hr>
      {isEdit ? form : results}
    </div>
  );
}

export default PersonalInfo;
