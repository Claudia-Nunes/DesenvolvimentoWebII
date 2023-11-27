// src/service/api.ts
import axios from 'axios';

const baseURL = 'http://localhost:3401';

const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const addValue = async (value: number) => {
  try {
    await axios.post(`${baseURL}/create/${value}`);
  } catch (error) {
    console.error('Error adding value:', error);
  }
};

const removeValue = async (id: number) => {
  try {
    await axios.get(`${baseURL}/remove/${id}`);
  } catch (error) {
    console.error('Error removing value:', error);
  }
};

