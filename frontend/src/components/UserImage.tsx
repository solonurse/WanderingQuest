import axios from "axios";
import { useState } from "react";

const UserImage = () => {
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", image);
    formData.append("refId", userId); //Rails側でpostとeyecatchを紐づけるため
    formData.append("field", "image");

    const res = await axios.post(`http://localhost:3000/api/v1/userimage/`, {
      data: formData,
    });

    if (res.ok) {
      alert("Image uploaded");
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="submit" className='hover:bg-gray-100 text-red-500 py-2 px-4 border border-gray-400 rounded shadow' value="Upload" />
    </form>
  )
}

export default UserImage;