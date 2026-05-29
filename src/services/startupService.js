import axios from "axios";

const API = "https://crowdfunding-platform-3.onrender.com/api/startups";

export const getStartups = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const getStartupById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};