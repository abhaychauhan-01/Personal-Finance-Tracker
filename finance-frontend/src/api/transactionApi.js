import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/transactions`;

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

// GET ALL
export const getTransactions = async () => {
  const response = await axios.get(
    API_URL,
    getConfig()
  );

  return response.data;
};

// CREATE
export const createTransaction = async (
  transactionData
) => {
  const response = await axios.post(
    API_URL,
    transactionData,
    getConfig()
  );

  return response.data;
};

// UPDATE
export const updateTransactionApi = async (
  id,
  transactionData
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    transactionData,
    getConfig()
  );

  return response.data;
};

// DELETE
export const deleteTransactionApi = async (
  id
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    getConfig()
  );

  return response.data;
};