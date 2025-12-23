import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <>
      <title>404 Page Not Found</title>

      <Header />

      <div className="message">
        <p>Page Not Found</p>
      </div>
    </>
  );
}
