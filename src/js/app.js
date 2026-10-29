import {
  createPizza,
  updatePizza,
  deletePizza,
  getPizzas,
  getOnePizza,
} from "./api/pizzas";
import Handlebars from "handlebars";
import { createPizzaListMarkup } from "./api/createPizzaList";
import "basicLightbox/dist/basicLightbox.min.css";
import { modalCreateSettings, modalSettings } from "../modal";

const pizzaContainer = document.querySelector("[data-pizzas-container]");
const aside = document.querySelector(".aside");

async function renderPizza() {
  try {
    const pizzas = await getPizzas();
    const markUp = createPizzaListMarkup(pizzas);
    pizzaContainer.innerHTML = markUp;
  } catch (error) {
    console.log(error);
  }
}

renderPizza();
const modal = modalSettings.element();
const creationModal = modalCreateSettings.element();
const form = modal.querySelector("[data-form]");
const creationForm = creationModal.querySelector("[data-form-create]");

async function handleShowSettings(event) {
  const pizzaId = event.target.closest("[data-id-pizza]").dataset.idPizza;
  if (event.target.dataset.pizzaAction === "edit") {
    modalSettings.show();

    try {
      const pizza = await getOnePizza(pizzaId);

      console.log(pizza.name);
      form.name.value = pizza.name;
      form.price.value = pizza.price;
      form.ingredients.value = pizza.ingredients.join(", ");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        updatePizza(
          {
            name: form.name.value,
            price: form.price.value,
            ingredients: form.ingredients.value.split(", "),
            image: pizza.image,
          },
          pizzaId,
        );
      });
    } catch (error) {
      console.log(error);
    }
  } else if (event.target.dataset.pizzaAction === "delete") {
    deletePizza(pizzaId);
  }
}

aside.addEventListener("click", (e) => {
  if (e.target.dataset.action === "refresh") {
    renderPizza();
  } else if (e.target.dataset.action === "create") {
    modalCreateSettings.show();

    try {
      creationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createPizza({
          name: creationForm.name.value,
          price: creationForm.price.value,
          ingredients: creationForm.ingredients.value.split(", "),
          image: creationForm.image.value,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
});
pizzaContainer.addEventListener("click", handleShowSettings);
