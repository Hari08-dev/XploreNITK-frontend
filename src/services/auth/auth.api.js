import axios from "axios";

const API_URL = "http://localhost:3008/api/auth";


export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw error; // Rethrow the error to be handled in the calling function
  }
}

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error; // Rethrow the error to be handled in the calling function
  }
}

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/user/${id}`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Rethrow the error to be handled in the calling function
  }
}

export const Auth = async (response) => {
  try{
    const res = await axios.post(`${API_URL}/google`, {credential: response.credential}, {withCredentials: true});
    return res.data;
  } catch(err){
    console.log(err);
    throw error;
  }
};