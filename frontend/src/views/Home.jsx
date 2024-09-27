import useFetch from '../hooks/useFetch';
import Layout from '../layout';
import { styles } from './views.style';

export default function Home() {
  const { data, error } = useFetch('products');

  const formatter = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(num);
  };

  return (
    <Layout>
      <div
        style={{
          ...styles.container,
          alignItems: 'flex-start',
          gap: '20px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <div
          style={{
            ...styles.card,
            overflow: 'auto',
            minHeight: 'inherit',
            padding: '20px',
            marginTop: '20px',
          }}>
          {data?.data?.map((item) => (
            <div
              key={item._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
              }}>
              <img
                src={`/${item.name.toLowerCase()}.png`}
                alt=""
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                }}
              />
              <h3>{item.name}</h3>
              <h4>{item.vendor}</h4>
              <p>{formatter(item.price)}</p>
              <p>{item.qty}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
