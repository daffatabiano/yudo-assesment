import Layout from '../layout';
import { styles } from './views.style';

export default function Profile() {
  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>Profile</h1>
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
        </div>
      </div>
    </Layout>
  );
}
