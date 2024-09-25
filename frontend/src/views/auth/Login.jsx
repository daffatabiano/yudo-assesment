import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notif, setNotif] = useState({
    message: '',
    status: '',
  });

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    };

    await login(body)
      .then((res) => {
        if (res.status === 200) {
          setNotif({
            message: res.data.message,
            status: 'success',
          });
        }
      })
      .catch((err) => {
        setNotif({
          message: err.response.data.message,
          status: 'error',
        });
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <p style={{ color: notif.status === 'success' ? 'green' : 'red' }}>
        {notif.message}
      </p>
      <form>
        <label htmlFor="">Name</label>
        <input
          type="text"
          className=""
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          className=""
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
