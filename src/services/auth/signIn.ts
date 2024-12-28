import axiosObject from "../axios.config";

export const userSignIn = async (phoneNumber: string) => {
  try {
    const uri: string = "/user/signIn";
    const response = await axiosObject.post(uri, phoneNumber);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
