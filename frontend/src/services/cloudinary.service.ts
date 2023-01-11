import axios from "axios";

const uploadFile = (file: File) => {
  const CLOUD_NAME = "di8d3r9vo";
  const PRESET_NAME = "g4fcacfw";
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", PRESET_NAME);

  return axios({
    method: "POST",
    url: UPLOAD_URL,
    data: formData,
  });
};

const cloudinaryService = {
  uploadFile,
};

export default cloudinaryService;
