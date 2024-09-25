import useAuth from '../../hooks/useAuth';

const headerLists = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Products',
    link: '#products',
  },
];

export default function Headers() {
  const { isAuthenticated } = useAuth();

  return (
    <header
      style={{
        width: '100%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div>
        <h1>Logo</h1>
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '20px',
          }}>
          {headerLists.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                style={{ textDecoration: 'none', color: 'black' }}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <a
          type="button"
          href="/login"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }}>
          {!isAuthenticated ? 'Logout' : 'Login'}
        </a>
      </div>
    </header>
  );
}
