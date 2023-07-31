import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

// eslint-disable-next-line react/prop-types
const Home = ({ dataAuth }) => {
  return (
    <div className="wrapper-home">
      <div className="">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
