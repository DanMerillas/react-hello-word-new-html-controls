function CustomFooter(props:{texto:string}) {
  return (
    <footer>
    <p className='copyright'>&copy; {props.texto}</p>
  </footer>
  );
}
export default CustomFooter;