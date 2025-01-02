export const handleApiError = (error: any) => {
  console.log("error response", error);
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error("Bad Request:", error.response.data.message);
        break;
      case 401:
        console.error("Unauthorized:", error.response.data.message);
        break;
      case 404:
        console.error("Not Found:", error.response.data.message);
        break;
      case 500:
        console.error("Server Error:", error.response.data.message);
        break;
      default:
        console.error("Unhandled Error:", error.response.data.message);
    }
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Request setup error:", error.message);
  }
  throw error;
};
