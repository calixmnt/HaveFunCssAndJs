import FeedbackForm from "./FeedbackForm.tsx"
import Logo from "./Logo.tsx"
import PageHeading from "./PageHeading.tsx"
import Pattern from "./Pattern.tsx"

const Header = () => {
  return (
    <header>
      <Pattern/>
      <Logo/>
      <PageHeading/>
      <FeedbackForm/>
    </header>
  )
}

export default Header