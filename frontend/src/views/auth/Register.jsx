import { useState } from 'react';
import useAuth from '../../src/hooks/useAuth';

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
    try {
      await register(body)
        .then((res) => {
          if (res.status === 200) {
            setNotify({
              message: res.data.message,
              status: 'success',
            });
          }
        })
        .catch((err) => {
          setNotify({
            message: err.response.data.message,
            status: 'error',
          });
        });
    } catch (error) {
      console.log(error);
    }
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
        <input type="text" name="name" />
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
