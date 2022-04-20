// Global Styles
import "./globalStyles.scss";

// Components
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";

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
  const main = document.createElement(main);

  if (selectedTab === "/") {
    main.innerHTML = `<h2>Home</h2>`;
  } else if (selectedTab === "/menu") {
    main.innerHTML = `<h2>Menu</h2>`;
  } else if (selectedTab === "/about") {
    main.innerHTML = `<h2>About</h2>`;
  }

  content.appendChild(main);

  content.appendChild(Footer(siteLinks, changeTab));
};

render();
