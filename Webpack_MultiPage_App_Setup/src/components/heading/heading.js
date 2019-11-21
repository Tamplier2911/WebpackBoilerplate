import "./heading.css";

class Heading {
  headingCssClass = "heading";

  render(pageName) {
    const heading = document.createElement("h1");
    heading.textContent = "Hello, Webpack! This is " + pageName + " page.";
    heading.classList.add(this.headingCssClass);

    const body = document.querySelector("body");
    body.appendChild(heading);
  }
}

export default Heading;
