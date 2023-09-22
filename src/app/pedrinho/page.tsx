export default function pedro() {
  return (
    <main>
      <form
        style={{ display: "flex", flexDirection: "column", padding: "5px" }}
      >
        <label style={{ margin: "5px" }}>
          Nome:
          <input type="text" name="name" />
        </label>
        <label style={{ margin: "5px" }}>
          E-mail:
          <input type="text" name="email" />
        </label>
        <label style={{ margin: "5px" }}>
          E-senha:
          <input type="password" name="senha" />
        </label>
        <button
          className="button-submit"
          style={{ margin: "5px", width: "100px", height: "30px" }}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
