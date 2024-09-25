import axios from 'axios';

const usePost = () => {
  const createProduct = async (body) => {
    try {
      const res = await axios.post(`http://localhost:5000/products`, body, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  };
  const updateProduct = async (id, body) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/products/${id}`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      return res;
    } catch (error) {
      return error;
    }
  };

  return { createProduct, updateProduct };
};

export default usePost;
