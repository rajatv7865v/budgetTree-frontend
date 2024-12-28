import axiosObject from "../../axios.config";

export const connectWithZoho = async () => {
  try {
    const uri: string = "auth/zoho/connect";
    const response = await axiosObject.get(uri);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
