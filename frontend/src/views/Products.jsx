import { useCallback, useState } from 'react';
import useFetch from '../hooks/useFetch';
import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';
import { styles as stylesAuth } from './auth/styles.auth';

const Card = ({ total, active, vendor, category, name }) => {
  return (
    <div style={{ ...styles.card, minHeight: '40vh' }}>
      <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
        {active ? 'Active' : 'Inactive'} Products : {total}
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
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            margin: '10px',
          }}>
          <button style={styles.button}>Edit</button>
          <button style={{ ...styles.button, backgroundColor: '#ff0000' }}>
            Delete
          </button>
        </div>
        <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
          {name}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
          }}>
          <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
            {vendor}
          </p>
          <p
            style={{
              margin: '0',
              fontWeight: 'lighter',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            {category}
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            borderRadius: '5px',
            width: '100%',
            height: '10px',
            backgroundColor: active ? '#00ff00' : '#ff0000',
            display: 'flex',
          }}
        />
      </div>
    </div>
  );
};

const Modal = ({ setShowModal, showModal }) => {
  return (
    <div
      style={{
        position: showModal ? 'fixed' : 'hidden',
        display: showModal ? 'block' : 'none',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
      }}>
      <div
        style={{
          position: 'absolute',
          display: showModal ? 'block' : 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h1>Add Product</h1>
          <button
            type="button"
            onClick={setShowModal}
            style={{ backgroundColor: 'transparent', border: 'none' }}>
            Close
          </button>
        </div>
        <form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '20px',
            }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              style={stylesAuth.input}
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              style={stylesAuth.input}
            />
            <label htmlFor="vendor">Vendor</label>
            <input
              type="text"
              name="vendor"
              id="vendor"
              placeholder="Vendor"
              style={stylesAuth.input}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
              gap: '10px',
            }}>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={{
                ...styles.button,
                width: '100px',
                backgroundColor: 'red',
              }}>
              Close
            </button>
            <button type="submit" style={{ ...styles.button, width: '100px' }}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Products() {
  const { data } = useFetch('products');
  const [showModal, setShowModal] = useState(false);

  return (
    <LayoutDashbaord>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
          <button
            type="button"
            onClick={() => setShowModal(true)}
            style={{ ...styles.button, width: '200px' }}>
            Add Product
          </button>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
          {data?.data?.map((item) => (
            <Card
              key={item.id}
              total={item.is_active}
              active={item.is_active}
              vendor={item.vendor}
              category={item.category}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </LayoutDashbaord>
  );
}
