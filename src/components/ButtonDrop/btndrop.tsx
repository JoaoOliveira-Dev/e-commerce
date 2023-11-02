import "./btndrop.css";

const ButtonDrop = ({ ...props }) => {
  return (
    <button className="button" {...props}>
      <p>Comprar agora</p>
    </button>
  );
};

export default ButtonDrop;
