import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { styles } from './styles.auth';
import { Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notif, setNotif] = useState({
    message: '',
    status: '',
  });

  const handleLogin = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };

      if (!body.email || !body.password) {
        setNotif({
          message: 'All fields are required',
          status: 'error',
        });

        setTimeout(() => {
          setNotif({});
        }, 3000);
        return;
      }

      const res = await login(body);

      if (res.status === 201) {
        setNotif({
          message: `Welcome Back ${res.data.data.name} !`,
          status: 'success',
        });
        localStorage.setItem(
          'profile',
          JSON.stringify({
            ...res.data.data,
            token: res.data.token,
          })
        );
        setTimeout(() => {
          setNotif({});
          window.location.href = '/';
        }, 2000);
      } else {
        setNotif({
          message: res.response.data.message,
          status: 'error',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login </h1>
      <p
        style={{
          color: 'white',
          backgroundColor: notif.status === 'success' ? '#28a745' : '#dc3545',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
          textAlign: 'center',
          display: notif.message ? 'block' : 'none',
        }}>
        {notif.message}{' '}
      </p>
      <form style={styles.form}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          style={styles.input}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <Link to="/register">Don&apos;t have an account yet?</Link>
    </div>
  );
}
