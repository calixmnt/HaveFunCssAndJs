import { useEffect, useState } from "react";
import Count from "./Count.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import ResetButton from "./ResetButton.jsx";
import Title from "./Title.jsx";
import CountButton from "./CountButton.jsx";

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setCount((prev) => {
          const newCount = prev + 1;
          if (newCount > 5) {
            return 5;
          }
          return newCount;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    //CLEAN UP THE PREVIOUS EVENT
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton locked={locked} type="minus" setCount={setCount} />
        <CountButton locked={locked} type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
};

export default Card;
