import axios from 'axios';

const useAuth = () => {
  const login = async (body) => {
    try {
      const res = await axios.get('http://localhost:5000/login', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  };
  const register = async (body) => {
    try {
      const res = await axios.post('http://localhost:5000/users', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  };

  const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  };

  return {
    login,
    register,
    isAuthenticated,
  };
};

export default useAuth;
