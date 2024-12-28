import axiosObject from "../../axios.config";

export const connectWithZoom = async () => {
  try {
    const uri: string = "auth/zoom/connect";
    const response = await axiosObject.get(uri);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
