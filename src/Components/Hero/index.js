// Styles
import styles from "./styles.module.scss";

// Images
import Pizza from "../../Assets/pizza.png";

const Hero = () => {
  const div = document.createElement("div");
  div.classList.add(styles.hero);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const info = document.createElement("div");
  info.classList.add(styles.info);

  const title = document.createElement("h2");
  title.classList.add(styles.title);
  title.textContent = "All in Good Taste Food With Foodies";

  const desc = document.createElement("p");
  desc.classList.add(styles.desc);
  desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque libero aliquid tenetur necessitatibus mollitia facilis accusantium fugit autem et.";

  info.appendChild(title);
  info.appendChild(desc);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add(styles.image);

  const img = document.createElement("img");
  img.src = Pizza;
  img.alt = "Pizza";
  img.loading = "lazy";

  imageDiv.appendChild(img);

  wrapper.appendChild(info);
  wrapper.appendChild(imageDiv);

  div.appendChild(wrapper);

  return div;
};

export default Hero;
