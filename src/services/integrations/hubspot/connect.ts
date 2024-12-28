import axiosObject from "../../axios.config";

export const connectWithHubspot = async () => {
  try {
    const uri: string = "auth/hubspot/connect";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
