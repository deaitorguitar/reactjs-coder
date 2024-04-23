import { useState } from "react";
import { products } from "../../../productsMock";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams, useNavigate } from "react-router-dom";


const ItemListContainer = () => {

  const navigate = useNavigate() 
  const {name} = useParams()
  console.log(name)

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    let productsFiltered = products.filter( product => product.category === name)

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve( name ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));


  }, [name]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;


