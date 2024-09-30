import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constant.ts";

const FeedbackForm = () => {
  const [text, setText] = useState<string>("");

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    
    setText(newText);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
        maxLength={150}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        {" "}
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
