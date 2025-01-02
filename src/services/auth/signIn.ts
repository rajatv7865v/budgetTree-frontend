import axiosObject from "../axios.config";
import { handleApiError } from "../error.handler";

export const userSignIn = async (phoneNumber: string) => {
  try {
    const uri: string = "/user/signIn";
    const response = await axiosObject.post(uri, { phoneNumber });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    handleApiError(error);
  }
};
