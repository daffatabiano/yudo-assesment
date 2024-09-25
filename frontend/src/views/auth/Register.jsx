import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { styles } from './styles.auth';

export default function Register() {
  const { register } = useAuth();
  const [notify, setNotify] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const res = await register(body);
      console.log(res);
      if (res.status === 201) {
        setNotify({
          message: 'Registration successful !',
          status: 'success',
        });
      } else {
        setNotify({
          message:
            res.response.data.message ||
            'Something went wrong, please try again',
          status: 'error',
        });
      }
    } catch (error) {
      setNotify({
        message: error.response.data.message || 'Registration failed',
        status: 'error',
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Register</h1>
      <p style={{ color: notify.status === 'success' ? 'green' : 'red' }}>
        {notify.message}
      </p>
      <form
        action="register-form"
        onSubmit={handleRegister}
        style={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" style={styles.input} />
        <label htmlFor="email">email</label>
        <input type="email" name="email" style={styles.input} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" style={styles.input} />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <Link to="/login">Already Have an Account?</Link>
    </div>
  );
}
