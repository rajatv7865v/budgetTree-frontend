import axiosObject from "../../axios.config";

export const connectWithSurveyMonkey = async () => {
  try {
    const uri: string = "auth/surveyMonkey/connect";
    const response = await axiosObject.get(uri);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
