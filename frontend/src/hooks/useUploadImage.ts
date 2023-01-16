import { useQuery } from "react-query";
import cloudinaryService from "../services/cloudinary.service";

const useUploadImage = (file: File) => {
  const { uploadFile } = cloudinaryService;

  return useQuery("uploadUserImage", () => uploadFile(file), {
    enabled: false, // disable unnecessary fetching on component mount - using 'refetch' to activate
    onError: (error) => {
      if (error instanceof Error) return JSON.stringify(error.message);
      return "";
    },
  });
};

export default useUploadImage;
