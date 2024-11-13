import axiosObject from "../../../axios.config";

export const getFormsOfTypeForm = async () => {
  try {
    const uri: string = "auth/typeform/get-all-forms";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
