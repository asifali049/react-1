function Hello() {

  let myName = "mohamed";
  let fullName = () => {
    return "mohamed ahmed";
  }


  return <p>Hello, world!{fullName()}</p>;
}

export default Hello;