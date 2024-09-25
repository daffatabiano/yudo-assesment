import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function Register() {
  const { register } = useAuth();
  const [notify, setNotify] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await register(body)
      .then((res) => {
        if (res.status === 200) {
          setNotify({
            message: res.data.message || 'Registration successful',
            status: 'success',
          });
          setTimeout(() => {
            <Navigate to="/login" />;
            setNotify({});
          });
        }
      })
      .catch((err) => {
        setNotify({
          message: err.response.data.message || 'Registration failed',
          status: 'error',
        });
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '0 10px',
      }}>
      <h1>Register</h1>
      <p style={{ color: notify.status === 'success' ? 'green' : 'red' }}>
        {notify.message}
      </p>
      <form
        action="register-form"
        onSubmit={handleRegister}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
