// Styles
import Logo from "../Logo";
import styles from "./styles.module.scss";

const socialLinks = [
  {
    to: "#",
    label: "Facebook",
  },
  {
    to: "#",
    label: "Twitter",
  },
  {
    to: "#",
    label: "Instagram",
  },
  {
    to: "#",
    label: "Pinterest",
  },
];

const contactDetails = ["89263-09764", "demo@test.com", "Somewhere on the Earth"];

const Footer = (siteLinks, changeTab) => {
  const footer = document.createElement("footer");
  footer.classList.add(styles.footer);

  const wrapper = document.createElement("div");
  wrapper.classList.add(styles.wrapper);

  // About Section: START
  const aboutSection = document.createElement("div");
  aboutSection.classList.add(styles.aboutSection);

  const about_text = document.createElement("p");
  about_text.classList.add(styles.info);
  about_text.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis neque assumenda praesentium, sit rerum porro?";

  const socialLinksDiv = document.createElement("div");
  socialLinksDiv.classList.add(styles.socialLinks);

  socialLinks
    .map((link) => {
      const a = document.createElement("a");
      a.href = link.to;
      a.textContent = link.label;

      return a;
    })
    .forEach((link) => {
      socialLinksDiv.appendChild(link);
    });

  aboutSection.appendChild(Logo());
  aboutSection.appendChild(about_text);
  aboutSection.appendChild(socialLinksDiv);
  // About Section: END

  // Links Section: START
  const linksSection = document.createElement("div");
  linksSection.classList.add(styles.linksSection);

  const linksSectHeading = document.createElement("h4");
  linksSectHeading.classList.add(styles.heading);
  linksSectHeading.textContent = "Links";

  const linksList = document.createElement("ul");

  siteLinks
    .slice(0, 3)
    .map((link) => {
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.href = link.to;
      a.textContent = link.label;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        changeTab(link.to);
      });

      li.appendChild(a);

      return li;
    })
    .forEach((link) => {
      linksList.appendChild(link);
    });

  linksSection.appendChild(linksSectHeading);
  linksSection.appendChild(linksList);
  // Links Section: END

  // Contact Section: START
  const contactSection = document.createElement("div");
  contactSection.classList.add(styles.contactSection);

  const contactSectHeading = document.createElement("h4");
  contactSectHeading.classList.add(styles.heading);
  contactSectHeading.textContent = "Contact";

  contactSection.appendChild(contactSectHeading);

  contactDetails
    .map((contact) => {
      const p = document.createElement("p");
      p.textContent = contact;

      return p;
    })
    .forEach((contact) => {
      contactSection.appendChild(contact);
    });
  // Contact Section: END

  wrapper.appendChild(aboutSection);
  wrapper.appendChild(linksSection);
  wrapper.appendChild(contactSection);

  footer.appendChild(wrapper);

  return footer;
};

export default Footer;
