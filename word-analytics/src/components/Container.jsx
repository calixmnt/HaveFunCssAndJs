import { useState } from "react";
import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { getNumberOfWords } from "../utils/index.js";
import { INSTAGRAM_LIMIT, FACEBOOK_LIMIT } from "../constants/index.js";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords : getNumberOfWords(text),
    numberOfCharacters : text.length,
    instagramLeft : INSTAGRAM_LIMIT - text.length,
    facebookLeft : FACEBOOK_LIMIT - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
