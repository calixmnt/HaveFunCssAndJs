import { useState } from "react";
import Warning from "./Warning.jsx";

const Textarea = ({text, setText}) => {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("script")) {
      setWarningText("No script tag allowed !");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text"
        value={text}
        spellCheck={false}
        onChange={handleChange}
      />
      <Warning warningText={warningText} />
    </div>
  );
};

export default Textarea;
