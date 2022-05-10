// Styles
import styles from "./styles.module.scss";
import commonStyles from "../../commonStyles.module.scss";

// Images
import Burger from "../../Assets/burger.png";

const History = (changeTab) => {
  const div = document.createElement("div");
  div.classList.add(styles.history);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const info = document.createElement("div");
  info.classList.add(styles.info);

  const sectionHeading = document.createElement("h3");
  sectionHeading.classList.add(commonStyles.sectionHeading);
  sectionHeading.textContent = "History of Foodies";

  const title = document.createElement("h4");
  title.classList.add(styles.title);
  title.textContent = "We Cook Traditional & Family Recipe";

  info.appendChild(sectionHeading);
  info.appendChild(title);

  for (let i = 0; i < 2; i++) {
    const desc = document.createElement("p");
    desc.classList.add(styles.desc);
    desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt quam labore dolorem. In provident tempora facilis! Perspiciatis, doloremque eius.";

    info.appendChild(desc);
  }

  const exploreBtn = document.createElement("button");
  exploreBtn.classList.add(styles.exploreBtn);
  exploreBtn.type = "button";
  exploreBtn.textContent = "Explore Our Menu";
  exploreBtn.addEventListener("click", () => changeTab("/menu"));

  info.appendChild(exploreBtn);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add(styles.image);

  const img = document.createElement("img");
  img.src = Burger;
  img.alt = "Burger";
  img.loading = "lazy";

  imageDiv.appendChild(img);

  wrapper.appendChild(info);
  wrapper.appendChild(imageDiv);

  div.appendChild(wrapper);

  return div;
};

export default History;
