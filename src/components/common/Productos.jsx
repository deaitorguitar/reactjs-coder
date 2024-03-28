export const Productos = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h3>{props.tarjeta}</h3>
        <h4>{props.descripcion}</h4>
        <h4>{props.precio}</h4>
      </div>
    </div>
  );
};
