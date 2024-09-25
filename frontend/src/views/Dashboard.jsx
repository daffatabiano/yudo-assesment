import Layout from '../layout';
import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';

export default function Dashboard() {
  return (
    <LayoutDashbaord>
      <div style={styles.container}>
        <h1>Dashboard Control</h1>
      </div>
    </LayoutDashbaord>
  );
}
