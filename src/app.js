window.onload = () => {
  const personNameInput = document.querySelector("#person-name");
  const addPersonButton = document.querySelector("#add-person");
  const personsList = document.querySelector(".persons-list");

  // function getPersons() {
  //   const persons = document.querySelectorAll(".person-name");
  //   return [...persons];
  // }

  function getRemoveButtons() {
    const removeButtons = document.querySelectorAll(".remove-button");
    return [...removeButtons];
  }

  function addPerson() {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <span class="person-name">${personNameInput.value}</span>
      <button type="button" class="remove-button">X</button>
    `;
    personsList.appendChild(liElement);

    personNameInput.value = "";

    applyEventClickToRemoveButtons(getRemoveButtons());
  }

  function removePerson(element) {
    personsList.removeChild(element);
  }

  function applyEventClickToRemoveButtons(elements) {
    elements.forEach((el) => {
      el.onclick = () => {
        removePerson(el.parentNode);
      };
    });
  }

  personNameInput.onkeyup = (event) => {
    if (event.keyCode === 13) {
      addPerson();
    }
  };

  addPersonButton.onclick = () => {
    addPerson();
  };
};
