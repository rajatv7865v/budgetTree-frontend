import axiosObject from "../axios.config";

export const getAllProducts = async () => {
  try {
    const uri: string = "product/get-all";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
