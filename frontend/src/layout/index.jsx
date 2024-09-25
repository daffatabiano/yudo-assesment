import Headers from './partials/Headers';

export default function Layout({ children }) {
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}>
      <Headers />
      {children}
    </div>
  );
}
