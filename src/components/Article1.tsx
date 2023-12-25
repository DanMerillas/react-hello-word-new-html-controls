import elementos from '../../public/etiquetas-estructurales-html5.jpg'

function Article1() {
  return (
    <article >
    <h2>Articulo 1 - Imagen</h2>
    <img className='imagen' src={elementos} title='elementos estructurales' alt='elementos estructurales' />
  </article>
  );
}
export default Article1;