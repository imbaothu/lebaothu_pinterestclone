import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { db } from "../../firebase";
import { toast } from "react-toastify";
// import { writeJsonFile } from "write-json-file";

const CreatePost = () => {
  const [fileImage, setFileImage] = useState();
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [dataDesc, setDataDesc] = useState({
    title: "",
    content: "",
  });
  // const []

  const handleSubmitUpload = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", fileImage);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "uploads");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();

      await addDoc(collection(db, "images"), {
        imageUrl: res.url,
        title: dataDesc.title,
        content: dataDesc.content
      });
      setLoading(false);
      setPreview(null);
      toast.success("Đã tải lên thành công");
    } catch (error) {
      //
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileImage(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-[28px] w-full flex items-center justify-center ">
      {loading && (
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <div className="h-full w-full flex items-center justify-center bg-slate-400 opacity-50">
            <Loading />
          </div>
        </div>
      )}
      <div className="box-upload bg-white w-[1000px] rounded-lg p-8">
        <div className="w-full flex justify-end">
          <button
            className="py-[8px] px-[10px] bg-red-500 text-white rounded-md"
            onClick={handleSubmitUpload}
          >
            Tạo mới
          </button>
        </div>
        <div className="flex mt-4">
          <label className="h-[500px] w-[300px] bg-gray-200 flex items-center justify-center rounded-lg cursor-pointer">
            {preview && <img src={preview} alt="" />}
            <input type="file" className="hidden" onChange={handleFileChange} />
            {!preview && "Kéo và thả hoặc nhấp để tải lên"}
          </label>
          <div className="p-6 flex-1">
            <input
              type="text"
              placeholder="Tạo tiêu đề"
              className="border-b-2 text-[26px] py-[8px] w-full"
              onChange={(e) =>
                setDataDesc({
                  ...dataDesc,
                  title: e.target.value,
                })
              }
            />
            <div className="flex items-center my-3">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="ml-3 font-semibold">Người dùng 1</span>
            </div>
            <textarea
              id="about"
              name="about"
              rows="3"
              className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                setDataDesc({
                  ...dataDesc,
                  content: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
