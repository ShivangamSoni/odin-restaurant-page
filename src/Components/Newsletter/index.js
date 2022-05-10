// Styles
import styles from "./styes.modules.scss";
import commonStyles from "../../commonStyles.module.scss";

// Icon
import arrowIcon from "../../Assets/arrow-right-thin.svg";

const Newsletter = () => {
  const div = document.createElement("div");
  div.classList.add(styles.newsLetter);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const sectionHeading = document.createElement("h3");
  sectionHeading.classList.add(commonStyles.sectionHeading);
  sectionHeading.textContent = "Subscription";

  const title = document.createElement("h3");
  title.classList.add(styles.title);
  title.textContent = "Want to get Updates?";

  const form = document.createElement("form");

  const emailInput = document.createElement("input");
  emailInput.classList.add(styles.email);
  emailInput.type = "email";
  emailInput.placeholder = "Enter Your Email Address";

  const sendBtn = document.createElement("button");
  sendBtn.classList.add(styles.sendBtn);
  sendBtn.type = "submit";
  sendBtn.innerHTML = arrowIcon;

  form.appendChild(emailInput);
  form.appendChild(sendBtn);

  wrapper.appendChild(sectionHeading);
  wrapper.appendChild(title);
  wrapper.appendChild(form);

  div.appendChild(wrapper);

  return div;
};

export default Newsletter;
