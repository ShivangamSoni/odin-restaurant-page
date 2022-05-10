// Styles
import styles from "./styles.module.scss";
import commonStyles from "../../commonStyles.module.scss";

// Image
const { default: Chef } = await import("../../Assets/chef.png");

const WelcomeSection = () => {
  const div = document.createElement("div");
  div.classList.add(styles.welcomeSection);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const chefImage = document.createElement("div");
  chefImage.classList.add(styles.chefImage);

  const img = document.createElement("img");
  img.src = Chef;
  img.loading = "lazy";

  chefImage.appendChild(img);

  const info = document.createElement("div");
  info.classList.add(styles.info);

  const sectionHeading = document.createElement("h3");
  sectionHeading.classList.add(commonStyles.sectionHeading);
  sectionHeading.textContent = "Welcome";

  const title = document.createElement("h4");
  title.classList.add(styles.title);
  title.textContent = "Welcome to Foodies Restaurant";

  info.appendChild(sectionHeading);
  info.appendChild(title);

  for (let i = 0; i < 2; i++) {
    const desc = document.createElement("p");
    desc.classList.add(styles.desc);
    desc.textContent =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A tempora necessitatibus perspiciatis cum deserunt architecto error sed temporibus molestias expedita?";
    info.appendChild(desc);
  }

  wrapper.appendChild(chefImage);
  wrapper.appendChild(info);

  div.appendChild(wrapper);

  return div;
};

export default WelcomeSection;
