function onButtonClick() {
  addEventListener(
    "click",
    (onButtonClick, (window.location.href = "/website/backend/second.html"))
  );
}

const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () =>
      todoEl.classList.toggle("completed")
    );

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    input.value = "";
  }
});
