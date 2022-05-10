// Styles
import styles from "./styes.modules.scss";
import commonStyles from "../../commonStyles.module.scss";

// Components
import MenuItem from "../../Components/MenuItem";

// Static Data
const ITEMS = [
  {
    img: (await import("../../Assets/burger.png")).default,
    name: "Burger",
    rating: 4,
    price: 50,
  },
  {
    img: (await import("../../Assets/pizza.png")).default,
    name: "Pizza",
    rating: 5,
    price: 100,
  },
];

const Menu = () => {
  const div = document.createElement("div");
  div.classList.add(styles.menu);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const sectionHeading = document.createElement("h3");
  sectionHeading.classList.add(commonStyles.sectionHeading);
  sectionHeading.textContent = "Browse";

  const title = document.createElement("h4");
  title.classList.add(styles.title);
  title.textContent = "Explore Our Menu";

  const listing = document.createElement("div");
  listing.classList.add(styles.listing);

  for (let i = 0; i < 3; i++) {
    ITEMS.forEach((item) => {
      const card = MenuItem(item);

      listing.appendChild(card);
    });
  }

  wrapper.appendChild(sectionHeading);
  wrapper.appendChild(title);
  wrapper.appendChild(listing);

  div.appendChild(wrapper);

  return div;
};

export default Menu;
