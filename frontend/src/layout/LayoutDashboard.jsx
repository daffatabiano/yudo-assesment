import { Link } from 'react-router-dom';

const dashboardLists = [
  {
    title: 'Dashboard',
    link: '/dashboard',
  },
  {
    title: 'Products',
    link: '/dashboard/products',
  },
];

export default function LayoutDashbaord({ children }) {
  return (
    <section>
      <aside
        style={{
          backgroundColor: '#f5f5f5',
          height: '100vh',
          width: '200px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'space-between',
          position: 'fixed',
        }}>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
          }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: '15px',
            }}>
            ← Home
          </Link>
          <h1 style={{ margin: '0', fontSize: '30px', fontWeight: 'bold' }}>
            Portal-Jono
          </h1>
        </div>
        <ul
          style={{
            padding: '10px',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
          {dashboardLists.map((list, index) => (
            <li style={{ listStyle: 'none', padding: '0' }} key={index}>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={list.link}>
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem('profile');
            window.location.href = '/login';
          }}
          type="button"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            fontSize: '15px',
            backgroundColor: 'red',
            width: '100%',
          }}>
          Logout
        </button>
      </aside>
      <header
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f8f8f8',
          height: '100px',
          marginBottom: '20px',
        }}>
        <h1>Dashboard Control </h1>
      </header>
      {children}
    </section>
  );
}
