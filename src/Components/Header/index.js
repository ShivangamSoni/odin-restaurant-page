// Styles
import styles from "./styles.module.scss";

// Components
import Logo from "../Logo";

const Header = (siteLinks, changeTab, selectedTab) => {
  const header = document.createElement("header");
  header.classList.add(styles.header);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const logo = Logo();

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  siteLinks
    .map((link) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.href = link.to;
      a.textContent = link.label;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        changeTab(link.to);
      });

      if (selectedTab === link.to) {
        a.classList.add(styles.active);
      }

      li.appendChild(a);

      return li;
    })
    .forEach((link) => {
      ul.appendChild(link);
    });

  nav.appendChild(ul);

  wrapper.appendChild(logo);
  wrapper.appendChild(nav);

  header.appendChild(wrapper);

  return header;
};

export default Header;
