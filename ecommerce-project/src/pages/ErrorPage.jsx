import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage({cart}) {
  return (
    <>
      <title>404 Page Not Found</title>

      <Header cart={cart}/>

      <div className="message">
        <p>Page Not Found</p>
      </div>
    </>
  );
}
