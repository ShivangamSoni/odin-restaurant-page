// Styles
import styles from "./styles.module.scss";
import commonStyles from "../../commonStyles.module.scss";

// Static Card Data
const testimonial = {
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, cupiditate.",
  user: {
    name: "John Wick",
    designation: "Unknown @ Unknown",
  },
};

const Testimonials = () => {
  const div = document.createElement("div");
  div.classList.add(styles.testimonials);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  const sectionHeading = document.createElement("h3");
  sectionHeading.classList.add(commonStyles.sectionHeading);
  sectionHeading.textContent = "Testimonials";

  const title = document.createElement("h4");
  title.classList.add(styles.title);
  title.textContent = "Food Lover's Say";

  const listing = document.createElement("div");
  listing.classList.add(styles.listing);

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add(styles.card);

    const desc = document.createElement("p");
    desc.classList.add(styles.desc);
    desc.textContent = testimonial.desc;

    const user = document.createElement("div");
    user.classList.add(styles.user);

    const profileImg = document.createElement("div");
    profileImg.classList.add(styles.profileImg);

    const img = document.createElement("img");
    img.src = `https://avatars.dicebear.com/api/bottts/_${i}.svg?b=%23000000`;
    img.alt = testimonial.user.name;
    img.loading = "lazy";

    profileImg.appendChild(img);

    const info = document.createElement("div");
    info.classList.add(styles.info);

    const name = document.createElement("span");
    name.classList.add(styles.name);
    name.textContent = testimonial.user.name;

    const designation = document.createElement("span");
    designation.classList.add(styles.designation);
    designation.textContent = testimonial.user.designation;

    info.appendChild(name);
    info.appendChild(designation);

    user.appendChild(profileImg);
    user.appendChild(info);

    card.appendChild(desc);
    card.appendChild(user);

    listing.appendChild(card);
  }

  wrapper.appendChild(sectionHeading);
  wrapper.appendChild(title);
  wrapper.appendChild(listing);

  div.appendChild(wrapper);

  return div;
};

export default Testimonials;
