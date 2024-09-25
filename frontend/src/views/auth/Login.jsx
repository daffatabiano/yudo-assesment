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

      const res = await login(body);
      console.log(res);

      if (res.status === 201) {
        setNotif({
          message: `Welcome Back ${res.data.data.name} !`,
          status: 'success',
        });
        localStorage.setItem('profile', JSON.stringify(res.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>
      <p style={{ color: notif.status === 'success' ? 'green' : 'red' }}>
        {notif.message}
      </p>
      <h1>Login </h1>
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
