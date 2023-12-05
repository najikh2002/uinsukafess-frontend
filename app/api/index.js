import axios from 'axios';

const apiUrl = "https://uinsuka-fess.onrender.com"; // Sesuaikan dengan URL API Anda

export const createPost = async (input) => {
    const data = {
        text: input,
    }


  try {
    const response = await axios.post(`${apiUrl}/createpost`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
