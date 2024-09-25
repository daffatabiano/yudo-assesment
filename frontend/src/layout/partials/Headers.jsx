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

const styles = {
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    textDecoration: 'none',
  },
};

export default function Headers() {
  const isAuthenticated = localStorage.getItem('profile');

  const handleLogout = () => {
    localStorage.removeItem('profile');
    window.location.href = '/login';
  };

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
        {isAuthenticated ? (
          <button onClick={handleLogout} style={styles.button} type="button">
            logout
          </button>
        ) : (
          <a type="button" href="/login" style={styles.button}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </a>
        )}
      </div>
    </header>
  );
}
