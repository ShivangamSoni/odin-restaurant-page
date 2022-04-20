// Styles
import styles from "./styles.module.scss";

const Logo = () => {
  const h1 = document.createElement("h1");
  h1.classList.add(styles.logo);
  h1.textContent = "Foodies";

  return h1;
};

export default Logo;
