// Components
import History from "../../Components/History";
import Testimonials from "../../Components/Testimonials";

const About = (changeTab) => {
  const div = document.createElement("div");

  div.appendChild(History(changeTab));
  div.appendChild(Testimonials());

  return div;
};

export default About;
