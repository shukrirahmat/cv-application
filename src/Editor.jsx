import { useState } from "react";

function EditToggle({title, children}) {
  const [showForm, setShowForm] = useState(false);
  let buttonText = showForm? 'CLOSE' : 'EDIT';

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <div>
      <div className="toggler">
        <p>{title}</p>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
      {showForm && (children)}
    </div>
  );
}

function Editor() {
  return (
    <div className="editor">
      <EditToggle title='GENERAL INFORMATION'>
        <form>THIS IS FORM</form>
      </EditToggle>
      <EditToggle title='EDUCATIONAL EXPERIENCE'>
        <form>THIS IS FORM</form>
      </EditToggle>
      <EditToggle title='PRACTICAL EXPERIENCE'>
        <form>THIS IS FORM</form>
      </EditToggle>
    </div>
  );
}

export default Editor;
