export const Register = () => {
  return (
    <section className="flex flex-col w-full mt-20">
      <h1 className="w-fill text-center py-8 text-6xl font-bold">Regístrate</h1>
      <p>
        Aunque te hayas prescrito, debes registrarte con todos los datos que se
        solicitan en el formulario.
      </p>
      <p>
        Si quieres ver el resto de detalles, revisa{" "}
        <a className="text-cGreen">el reglamento</a> ants de enviar tu
        participación
      </p>

      <form className="flex flex-col mt-6 gap-y-4">
        <label htmlFor="name">Nombre del proyecto*</label>
        <input
          type="text-area"
          id="name"
          name="name"
          value="name"
          className="bg-cSecondary h-[72px] px-8 rounded-[5px]"
          onChange={() => {}}
        />

        <label htmlFor="description">Descripción del proyecto*</label>
        <textarea
          id="description"
          name="description"
          placeholder="Introduce una breve descripción explicativa..."
          className="bg-cSecondary py-4 px-8 rounded-[5px]"
          onChange={() => {}}
        />

        <label htmlFor="description">Repositorio de Github*</label>
        <input
          type="text"
          id="github"
          name="github"
          // value={"github"}
          className="bg-cSecondary h-[72px] px-8 rounded-[5px]"
          onChange={() => {}}
        />
      </form>
    </section>
  );
};
