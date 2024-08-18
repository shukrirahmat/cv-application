import phoneIcon from "./assets/images/phone.svg";
import emailIcon from "./assets/images/email.svg";

function PersonalInfo() {
  const data = {
    firstName: "John",
    lastName: "Doe",
    email: "john_doe@gmail.com",
    phone: "123456789",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <div className="personalinfo">
      <div className="sectionhead">
        <p>PERSONAL INFO</p>
        <button>EDIT</button>
      </div>
      <hr></hr>
      <div className="sectiondata">
        <p className="name">
          {data.firstName} {data.lastName}
        </p>
        <div className="contact">
          <p>
            <img className="icon" src={emailIcon} alt="email" /> {data.email}
          </p>
          <p>
            <img className="icon" src={phoneIcon} alt="phone" /> {data.phone}
          </p>
        </div>
        <p className="about">{data.about}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
