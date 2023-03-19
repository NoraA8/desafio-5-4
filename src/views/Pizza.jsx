import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

export default function Pizza() {
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [pizzaSelected, setPizzaSelected] = useState([]);

  const { pizzas } = usePizzaContext();
  const { id } = useParams();

  useEffect(() => {
    pizzas.map((ingredient) => setPizzaIngredients(ingredient.ingredients));
    const detailedPizzaSelected = (id) => {
      const pizzaSelected = pizzas.filter((item) => {
        if (item.id === id) return item;
      });
      setPizzaSelected(pizzaSelected);
    };
    detailedPizzaSelected(id);
  }, [id, pizzas]);

  return (
    <>
      {pizzaSelected.map((item, i) => (
        <div className="d-flex justify-content-center mt-5" key={i}>
          <div>
            <img className="border" src={item.img} alt={`Pizza ${item.name}`} />
          </div>
          <div className="mx-5">
            <h1 className="mb-0">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </h1>
            <hr />
            <p className="">{item.desc}</p>
            <div className="mx-5">
              <p className="text-sm">
                <b>Ingredientes:</b>
              </p>
              <ul>
                {item.ingredients.map((ingredient, i) => (
                  <li className="text-sm" key={i}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex justify-content-between mx-5">
              <p className="text-center fs-4 mb-0">
                <b>{`$ ${item.price.toString().slice(0, 1)}.${item.price
                  .toString()
                  .slice(1)}`}</b>
              </p>
              <Link to={"/carrito"} className="btn btn-danger ms-1">
                Añadir 🛒
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
