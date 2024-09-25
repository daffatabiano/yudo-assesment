import Layout from '../layout';
import { styles } from './views.style';
import { Link, Navigate } from 'react-router-dom';

export default function Profile() {
  const profile = JSON.parse(localStorage.getItem('profile'));

  if (!profile) {
    return <Navigate to="/login" />;
  }

  console.log(profile);

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.card}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
            }}>
            <h1 style={{ marginBottom: '10px' }}>Profile</h1>
            <img
              src="https://via.placeholder.com/150"
              alt=""
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '1px solid #ccc',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '10px',
              }}>
              <p>Name: {profile?.name}</p>
              <p>Email: {profile?.email}</p>
              <p>Role: {'admin'}</p>
            </div>
          </div>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      </div>
    </Layout>
  );
}
