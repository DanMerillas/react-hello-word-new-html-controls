function Article2() {
  return (
    <article>
    <h2>Articulo2</h2>
    <div>
      <label htmlFor="listado">Listado seleccionable: </label>
      <input id='listado' type="text" list="lista" />
      <datalist id='lista'>
        <option value="Texto1">Texto1</option>
        <option value="Texto2">Texto2</option>
        <option value="Texto3">Texto3</option>
        <option value="Texto4">Texto4</option>
      </datalist>
    </div>
    <div>
      <label htmlFor="fecha">Seleccionar fecha: </label>
      <input id='fecha' type="datetime-local" />
    </div>
    <div>
      <label htmlFor="seleccionHora">Seleccionar hora: </label>
      <input id='seleccionHora' type="time" list="hours" />
      <datalist id='hours'>
        <option value="17:00"></option>
        <option value="18:00"></option>
        <option value="19:00"></option>

      </datalist>
    </div>
    <div>
      <label htmlFor="foto">Seleccionar hora: </label>
      <input id='foto' type="file" accept='image/*' capture='user' />
    </div>
    <div>
      <details>
        <summary>Titulo del elemento colapsable</summary>
        <p>Texto de ejemplo dentro del colapsable</p>
      </details>
    </div>
  </article>
  );
}
export default Article2;