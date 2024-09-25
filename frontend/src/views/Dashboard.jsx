import useFetch from '../hooks/useFetch';
import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';

const cardItems = [
  {
    title: 'Total Product',
    content: (products) => {
      console.log(products);
      const colors = products?.map((item) =>
        item.is_active ? '#00ff00' : '#ff0000'
      );
      return (
        <div style={{ width: '100%' }}>
          <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
            Total : {products?.length}
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
                top: '15px',
                right: '0px',
                width: '10px',
                height: '10px',
                backgroundColor: colors,
                borderRadius: '50%',
                display: 'flex',
              }}
            />
            <h4>Product: </h4>
            <p>{products?.map((item) => item.name)}</p> <h5>Vendor:</h5>
            <p>{products?.map((item) => item.vendor)}</p>
            <h5>Category:</h5>
            <p>{products?.map((item) => item.category)}</p>
            <hr style={{ width: '100%', margin: '10px 0' }} />
          </div>
        </div>
      );
    },
  },
  {
    title: 'Newest Product',
    content: (item) => {
      const newest = item?.sort((a, b) => b.created_at - a.created_at);
      const colors = newest
        ?.slice(0, 3)
        ?.map((item) => (item.is_active ? '#00ff00' : '#ff0000'));

      return (
        <div style={{ width: '100%' }}>
          <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
            Displaying 3 newest product
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
                top: '15px',
                right: '0px',
                width: '10px',
                height: '10px',
                backgroundColor: colors,
                borderRadius: '50%',
                display: 'flex',
              }}
            />
            <h4>Product: </h4>
            <p>{newest?.slice(0, 3)?.map((item) => item.name)}</p>{' '}
            <h5>Vendor:</h5>
            <p>{newest?.slice(0, 3)?.map((item) => item.vendor)}</p>
            <h5>Category:</h5>
            <p>{newest?.slice(0, 3)?.map((item) => item.category)}</p>
            <hr style={{ width: '100%', margin: '10px 0' }} />
          </div>
        </div>
      );
    },
  },
  {
    title: 'Active & Inactive Product',
    content: (item) => {
      const colors = item?.map((item) =>
        item.is_active ? '#00ff00' : '#ff0000'
      );
      return (
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex ',
              gap: '10px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            <p>Active: {item?.filter((item) => item.is_active).length}</p>
            <p>Inactive: {item?.filter((item) => !item.is_active).length}</p>
          </div>
          <div style={{ width: '100%', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '15px',
                right: '0px',
                width: '10px',
                height: '10px',
                backgroundColor: colors,
                borderRadius: '50%',
                display: 'flex',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px',
              }}>
              <h4>Product: </h4>
              <p>
                {item
                  ?.filter((item) => item.is_active)
                  .map((item) => item.name)}
              </p>
              <h5>Vendor:</h5>
              <p>
                {item
                  ?.filter((item) => item.is_active)
                  .map((item) => item.vendor)}
              </p>
              <h5>Category:</h5>
              <p>
                {item
                  ?.filter((item) => item.is_active)
                  .map((item) => item.category)}
              </p>
              <hr style={{ width: '100%', margin: '10px 0' }} />
            </div>
          </div>
        </div>
      );
    },
  },
];

export default function Dashboard() {
  const { data } = useFetch('products');

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
          <div
            key={index}
            style={{ ...styles.card, justifyContent: '', overflow: 'auto' }}>
            <h3>{item.title}</h3>
            {item.content(data?.data)}
          </div>
        ))}
      </div>
    </LayoutDashbaord>
  );
}
