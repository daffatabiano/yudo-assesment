import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';

export default function Products() {
  return (
    <LayoutDashbaord>
      <div
        style={{
          ...styles.container,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingLeft: '250px',
          gap: '20px',
          display: 'flex',
        }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyItems: 'space-between',
            alignItems: 'center',
            padding: '20px',
            gap: '100px',
          }}>
          <h1>Products Control</h1>
          <button style={{ ...styles.button, width: '200px' }}>
            Add Product
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ ...styles.card, minHeight: '40vh' }}>
            <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
              Total : 0
            </p>
            <div
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px',
              }}>
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#ff0000',
                  borderRadius: '50%',
                  display: 'flex',
                }}></div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashbaord>
  );
}
