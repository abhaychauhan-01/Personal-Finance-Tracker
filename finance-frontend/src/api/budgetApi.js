import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/budget`;

const getConfig = () => {
  try {
    const userInfo = JSON.parse(
      localStorage.getItem("userInfo") || "null"
    );

    if (!userInfo?.token) {
      return {};
    }

    return {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
  } catch (error) {
    localStorage.removeItem("userInfo");
    return {};
  }
};

export const getBudget =
  async () => {
    const response =
      await axios.get(
        API_URL,
        getConfig()
      );

    return response.data;
  };

export const updateBudget =
  async (monthlyBudget) => {
    const response =
      await axios.put(
        API_URL,
        { monthlyBudget },
        getConfig()
      );

    return response.data;
  };