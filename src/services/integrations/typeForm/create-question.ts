import axiosObject from "../../axios.config";

export const createQuestionInform = async (formId: string, payload: any) => {
    try {
      console.log("formId", formId);
    const uri: string = `/auth/typeform/create-question/${formId}`;
    const response = await axiosObject.patch(uri, { question: payload });
    if (response.status == 201) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
