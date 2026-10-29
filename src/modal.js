import * as basicLightbox from "basiclightbox";

export const modalSettings = basicLightbox.create(`<h3>Settings</h3>
    <form data-form>
      <label for="name">Name</label>
      <input name="name" placeholder="Name" type="text" />
      <label for="price">Price</label>
      <input name="price" placeholder="Price" type="number" />
      <label for="ingredients">Ingredients</label>
      <input name="ingredients" placeholder="Ingredients" type="text" />
      <button type="submit">done</button>
    </form>`);

export const modalCreateSettings = basicLightbox.create(`<h3>Create Pizza</h3>
    <form data-form-create>
      <label for="name">Name</label>
      <input name="name" placeholder="Name" type="text" />
      <label for="price">Price</label>
      <input name="price" placeholder="Price" type="number" />
      <label for="ingredients">Ingredients</label>
      <input name="ingredients" placeholder="Ingredients" type="text" />
      <label for="image">Image</label>
      <input name="image" placeholder="Image's SRC"></input>
      <button type="submit">done</button>
    </form>`);
