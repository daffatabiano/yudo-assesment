import useFetch from '../hooks/useFetch';
import Layout from '../layout';
import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';

const cardItems = [
  {
    title: 'Total Product',
    content: (item) => {
      return (
        <div>
          <p>{item.length}</p>
        </div>
      );
    },
  },
  {
    title: 'Newest Product',
    content: (item) => {
      return (
        <div>
          <p>
            {item
              .filter((i) => i.createdAt >= new Date())
              .map((item) => item.name)}
          </p>{' '}
        </div>
      );
    },
  },
  {
    title: 'Active & Inactive Product',
    content: () => {},
  },
];

export default function Dashboard() {
  const { data, loading, error } = useFetch('products');

  console.log(data?.data.map((item) => item.created_at));

  return (
    <LayoutDashbaord>
      <div
        style={{
          ...styles.container,
          alignItems: 'flex-start',
          paddingLeft: '250px',
          gap: '20px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {cardItems.map((item, index) => (
          <div key={index} style={{ ...styles.card, justifyContent: '' }}>
            <h3>{item.title}</h3>
            {item.content(data?.data)}
          </div>
        ))}
      </div>
    </LayoutDashbaord>
  );
}
