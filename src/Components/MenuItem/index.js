// Styles
import styles from "./styes.modules.scss";

// Icons
import CartIcon from "../../Assets/cart-outline.svg";
import FavIcon from "../../Assets/heart-outline.svg";

const MenuItem = ({ img, name, rating, price }) => {
  const card = document.createElement("div");
  card.classList.add(styles.card);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add(styles.image);

  const image = document.createElement("img");
  image.src = img;
  image.alt = name;
  image.loading = "lazy";

  const actions = document.createElement("div");
  actions.classList.add(styles.actions);

  const cartBtn = document.createElement("button");
  cartBtn.classList.add(styles.btn);
  cartBtn.type = "button";
  cartBtn.title = "Add To Cart";
  cartBtn.innerHTML = CartIcon;

  const favBtn = document.createElement("button");
  favBtn.classList.add(styles.btn);
  favBtn.type = "button";
  favBtn.title = "Add To Cart";
  favBtn.innerHTML = FavIcon;

  actions.appendChild(cartBtn);
  actions.appendChild(favBtn);

  imageDiv.appendChild(image);
  imageDiv.appendChild(actions);

  const info = document.createElement("div");
  info.classList.add(styles.info);

  const itemName = document.createElement("span");
  itemName.classList.add(styles.name);
  itemName.textContent = name;

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add(styles.rating);

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.classList.add(styles.star);

    if (i <= rating) {
      star.classList.add(styles.active);
    }

    ratingDiv.appendChild(star);
  }

  const priceSpan = document.createElement("span");
  priceSpan.classList.add(styles.price);
  priceSpan.textContent = `$ ${price.toFixed(2)}`;

  info.appendChild(itemName);
  info.appendChild(ratingDiv);
  info.appendChild(priceSpan);

  card.appendChild(imageDiv);
  card.appendChild(info);

  return card;
};

export default MenuItem;
