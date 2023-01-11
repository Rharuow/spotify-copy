import { Inter } from "@next/font/google";
import { useLayoutContext } from "../context/Layout";
import { Button } from "react-bootstrap";
import { apiAuth } from "../service/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setTitle } = useLayoutContext();
  setTitle("Orma Carbon Spotify - Login");

  const handleLogin = () => {
    apiAuth.post("/").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-h-100vh">
      <Button onClick={() => handleLogin()}>Entrar</Button>
    </div>
  );
}
