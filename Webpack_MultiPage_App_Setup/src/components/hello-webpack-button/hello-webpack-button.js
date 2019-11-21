// import "./hello-webpack-button.css";
import "./hello-webpack-button.scss";

class HelloWebpackButton {
  buttonCssClass = "hello-webpack-button";

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Say Hello";
    button.classList.add(this.buttonCssClass);

    const body = document.querySelector("body");
    body.appendChild(button);

    button.onclick = function() {
      const p = document.createElement("p");
      p.textContent = "Hello, webpack!";
      p.classList.add("hello-webpack-p");
      body.appendChild(p);
    };
  }
}

export default HelloWebpackButton;
