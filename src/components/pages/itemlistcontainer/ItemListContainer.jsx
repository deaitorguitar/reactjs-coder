import { Productos } from "../../common/Productos";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  return (
    <div>
      <h1>Productos Destacados</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          backgroundColor: "#ce987a",
        }}
      >
        <Productos
          tarjeta={"Producto 1"}
          descripcion={"Descripcion 1"}
          precio={500}
        />
        <Productos
          tarjeta={"Producto 2"}
          descripcion={"Descripcion 2"}
          precio={50000}
        />
        <Productos
          tarjeta={"Producto 3"}
          descripcion={"Descripcion 3"}
          precio={5000}
        />
      </div>
    </div>
  );
};
