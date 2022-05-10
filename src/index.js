// Global Styles
import "./globalStyles.scss";

// Components
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
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
    main.innerHTML = `<h1>Menu</h1>`;
  } else if (selectedTab === "/about") {
    main.appendChild(About(changeTab));
  }

  content.appendChild(main);

  content.appendChild(Footer(siteLinks, changeTab));
};

render();
