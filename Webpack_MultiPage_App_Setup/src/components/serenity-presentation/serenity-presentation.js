import serenity from "../../assets/images/serenity.jpg";
import "./serenity-presentation.css";

class SerenityPresentation {
  serenityPresentationWrapperClass = "serenityWrapper";
  serenityPresentationClass = "serenityPresentation";

  render() {
    const serenityPresentationWrapper = document.createElement("div");
    serenityPresentationWrapper.classList.add(
      this.serenityPresentationWrapperClass
    );

    const serenityPresentation = document.createElement("img");
    serenityPresentation.alt = "Image of serenity.";
    serenityPresentation.src = serenity;
    serenityPresentation.classList.add(this.serenityPresentationClass);

    const body = document.querySelector("body");
    body.appendChild(serenityPresentationWrapper);

    const wrap = document.querySelector(".serenityWrapper");
    wrap.appendChild(serenityPresentation);
  }
}

export default SerenityPresentation;
