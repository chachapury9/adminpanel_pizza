import Handlebars from "handlebars";
import pizzaTemplate from "bundle-text:../../hbs/pizza-template.hbs";

export function createPizzaListMarkup(data) {
  const compiledTemplate = Handlebars.compile(pizzaTemplate);
  const markUp = compiledTemplate(data);

  return markUp;
}
