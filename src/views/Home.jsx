import { Link } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

export default function Home() {
  const { pizzas } = usePizzaContext();

  return (
    <>
      <div className="text-center mt-4">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
      <hr />
      <div className="container d-flex py-5">
        <div className="row">
          {pizzas.map((item) => (
            <div className="col-3 card size mx-2 mb-3 pe-0 ps-0" key={item.id}>
              <img
                src={item.img}
                className="card-img-top"
                alt={`Pizza ${item.name}`}
              />
              <h5 className="card-title mx-4 mb-0 mt-2 fs-4">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </h5>
              <hr className="mx-2" />
              <div className="mx-4">
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
              <hr className="mx-2" />
              <p className="text-center fs-4">
                <b>{`$ ${item.price.toString().slice(0, 1)}.${item.price
                  .toString()
                  .slice(1)}`}</b>
              </p>
              <div className="text-center mb-2">
                <Link to={`/pizza/${item.id}`} className="btn btn-primary me-1">
                  Ver mas 👀
                </Link>
                <Link to={"/carrito"} className="btn btn-danger ms-1">
                  Añadir 🛒
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
