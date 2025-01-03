import axiosObject from "../../axios.config";

export const connectWithTypeform = async () => {
  try {
    const uri: string = "auth/typeform/connect";
    const response = await axiosObject.get(uri);
    console.log("response", response);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
