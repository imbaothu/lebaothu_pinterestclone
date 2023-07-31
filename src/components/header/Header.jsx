import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
          alt=""
        />
      </Link>
      <div className="text">Trang chủ</div>
      <Link to={"/create"} className="text">
        Tạo mới
      </Link>
      <div className="wrapper-input">
        <input type="text" placeholder="Search" />
      </div>
      <div className="notification">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJjPKx9YWurGzCtytuMWRTsVkHd5h7bG_Xke_z4R0mAWeeJ5XCkdMeDd9PKYejludO-8&usqp=CAU"
          alt=""
        />
      </div>
      <div className="notification">
        <img
          src="https://scontent.fhan7-1.fna.fbcdn.net/v/t39.30808-6/362269399_637159371737649_6594068682036778991_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5pfIx4t05kMAX_qRqxV&_nc_ht=scontent.fhan7-1.fna&oh=00_AfAMfUNJgrzpYGvtJXfBb2swtVzhWZ4i8E2zWDyKLcPlEA&oe=64CC4B54"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
