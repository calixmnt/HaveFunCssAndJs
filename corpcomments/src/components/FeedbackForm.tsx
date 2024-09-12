const FeedbackForm = () => {
  return (
    <form className="form">
      <textarea id="feedback-textarea" placeholder="" spellCheck={false} maxLength={150} />
      <label htmlFor="feedback-textarea">
        {" "}
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
