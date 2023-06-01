import axios from "axios";

const getUsersApi = async () => {
  const response = await axios({
    method: "GET",
    url: "https://6478645f362560649a2dadfe.mockapi.io/api/v1/users",
  });
  //console.log("response", response);
  return response.data;
};

export default getUsersApi;
