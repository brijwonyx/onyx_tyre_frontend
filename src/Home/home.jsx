// import { useContext } from "react";
// import { AppContext } from "../ContextAPI/AppContext";
import useHomeController from "./home-controller";

const Home = () => {
  const { text } = useHomeController();
  // const { count, counter } = useContext(AppContext);

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default Home;
