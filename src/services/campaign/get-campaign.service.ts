import axiosObject from "../axios.config";

export const getAllCampaign = async () => {
  try {
    const uri: string = "/campaign/get-all";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
