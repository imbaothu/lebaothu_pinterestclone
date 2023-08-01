import { collection, getDocs } from "firebase/firestore";
import "./style.scss";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";

const ListPost = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchAllData() {
      const querySnapshot = await getDocs(collection(db, "images"));
      const listImages = querySnapshot.docs.map((doc) => doc.data());
      console.log(listImages);
      setList(listImages);
    }

    fetchAllData();
  }, []);
  return (
    <div className="p-5 w-full">
      <div className="list-content w-full">
        {list?.map((item, index) => (
          <div className="item-content relative" key={index}>
            <img
              src={item.imageUrl}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-yellow-900 font-medium">{item?.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPost;
