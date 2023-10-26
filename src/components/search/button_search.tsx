import "./button_search.css";

export default function Button_Search() {
  return (
    <div className="input-container">
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Pesquise seu produto aqui!!"
      />
      <div className="highlight"></div>
    </div>
  );
}
