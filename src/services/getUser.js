import axios from 'axios';

export default async ({page}) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://reqres.in/api/users?page=${page}&amp;per_page=10`,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
