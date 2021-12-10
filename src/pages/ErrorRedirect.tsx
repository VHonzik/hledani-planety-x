import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Content from "../components/Content/Content";

function ErrorRedirect(props: {children?: React.ReactNode}) {
  let history = useHistory();

  useEffect(() => {
    function redirect() {
      history.push('/novahra');
    }
    let timer = setTimeout(() => redirect(), 5 * 1000);
    return function cleanUp() {
      clearTimeout(timer);
    }
  })
  return (
    <Content>
      <h1>Ups...</h1>
      {props.children}
      <p>Za chvíly tě pošlu zpátky na <Link to='/novahra'>úvodní stránku</Link>...</p>
    </Content>
  );
}

export default ErrorRedirect;