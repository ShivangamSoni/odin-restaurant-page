// Components
import WelcomeSection from "../../Components/WelcomeSection";
import Newsletter from "../../Components/Newsletter";
import Hero from "../../Components/Hero";

const Home = () => {
  const div = document.createElement("div");

  div.appendChild(Hero());
  div.appendChild(WelcomeSection());
  div.appendChild(Newsletter());

  return div;
};

export default Home;
