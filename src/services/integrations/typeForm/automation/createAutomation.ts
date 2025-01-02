import axiosObject from "../../../axios.config";
import { handleApiError } from "../../../error.handler";

export const createAutomation = async (automation: any) => {
  try {
    const uri: string = "/auth/typeform/create-automation";
    const response = await axiosObject.post(uri, { ...automation });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    handleApiError(error);
  }
};
