// Global Styles
import "./globalStyles.scss";

// Components
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";

const siteLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/menu",
    label: "Menu",
  },
  {
    to: "/about",
    label: "About",
  },
];

let selectedTab = "/";
const changeTab = (s) => {
  // Preventing Unnecessary Re-render
  if (selectedTab === s) {
    return;
  }

  // Scroll to Top
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  selectedTab = s;
  render();
};

const render = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  content.appendChild(Header(siteLinks, changeTab, selectedTab));
  const main = document.createElement("main");

  if (selectedTab === "/") {
    main.appendChild(Home());
  } else if (selectedTab === "/menu") {
    main.appendChild(Menu());
  } else if (selectedTab === "/about") {
    main.appendChild(About(changeTab));
  }

  content.appendChild(main);

  content.appendChild(Footer(siteLinks, changeTab));
};

render();
