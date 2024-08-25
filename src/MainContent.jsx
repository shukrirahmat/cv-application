import PersonalInfo from "./PersonalInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";

function MainContent() {

  return (
    <div className="maincontent">
      <PersonalInfo/>
      <EducationalExp/>
      <PracticalExp/>
    </div>
  );
}

export default MainContent;
