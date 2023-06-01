import axios from "axios";

export const getUsersApi = async () => {
  const response = await axios({
    method: "GET",
    url: "https://6478645f362560649a2dadfe.mockapi.io/api/v1/users",
  });
  //console.log("response", response);
  return response.data;
};

export const createUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://6478645f362560649a2dadfe.mockapi.io/api/v1/users",
    data: user,
  });
  return res.data;
};

export const deleteUserApi = async (userId) => {
  const res = await axios({
    method: "DELETE",
    url: `https://6478645f362560649a2dadfe.mockapi.io/api/v1/users/${userId}`,
    data: userId,
  });
  return res;
};

export const updateUserApi = async (updatedUser) => {
  const res = await axios({
    method: "PUT",
    url: `https://6478645f362560649a2dadfe.mockapi.io/api/v1/users/${updatedUser.id}`,
    data: updatedUser,
  });
  return res.data;
};
