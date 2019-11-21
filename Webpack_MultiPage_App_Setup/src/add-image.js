import serenity from "./assets/images/serenity.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "serenity";
  img.src = serenity;
  img.width = 300;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
