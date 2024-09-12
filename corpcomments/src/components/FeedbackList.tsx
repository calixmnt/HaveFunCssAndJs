import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>C</p>
        </div>
        <div>
          <p>Calixx</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error
            animi eaque, deleniti saepe alias.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
