import { BASE_URL } from "../config.js";

export async function createPizza(pizza) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizza),
  });

  if (!response.ok) {
    throw new Error(`Couldn't create a pizza: ${response.statusText}`);
  }

  return response.json();
}

export async function getPizzas() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Couldn't read pizzas: ${response.statusText}`);
  }

  return response.json();
}

export async function deletePizza(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Couldn't delete a pizza: ${response.statusText}`);
  }

  return response.json();
}

export async function updatePizza(pizza, id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizza),
  });

  if (!response.ok) {
    throw new Error(`Couldn't update a pizza: ${response.statusText}`);
  }

  console.log(`updated pizza${id}`);
}

export async function getOnePizza(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Couldn't read pizzas: ${response.statusText}`);
  }

  return response.json();
}
