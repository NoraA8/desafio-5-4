import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PizzaContext = createContext();

export default function PizzaContextProvider({ children }) {
  const navigate = useNavigate();

  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(`pizzas.json`);
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>{children}</PizzaContext.Provider>
  );
}

export const usePizzaContext = () => useContext(PizzaContext);
