import axiosObject from "../../../axios.config";
import { handleApiError } from "../../../error.handler";

export const getAllAutomation = async (): Promise<any> => {
  try {
    const uri: string = "/auth/typeform/getAll-automation";
    const response = await axiosObject.get(uri);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    handleApiError(error);
  }
};
