import Logo from "./Logo.jsx";
import Counter from "./Counter.jsx";
import { useItemsContext } from "../lib/hooks.js";

const Header = () => {
  const { items } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;
