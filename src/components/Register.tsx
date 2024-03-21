export const Register = () => {
  return (
    <>
      <h1>Regístrate</h1>
      <p>
        Aunque te hayas prescrito, debes registrarte con todos los datos que se
        solicitan en el formulario.
      </p>
      <p>
        Si quieres ver el resto de detalles, revisa{" "}
        <a className="text-cGreen">el reglamento</a> ants de enviar tu
        participación
      </p>

      <form>
        <label htmlFor="name">Nombre del proyecto*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={"name"}
          onChange={() => {}}
        />

        <label htmlFor="description">Descripción del proyecto*</label>
        <input
          type="text"
          id="description"
          name="description"
          value={"description"}
          onChange={() => {}}
        />

        <label htmlFor="description">Repositorio de Github*</label>
        <input
          type="text"
          id="github"
          name="github"
          value={"github"}
          onChange={() => {}}
        />
      </form>
    </>
  );
};
