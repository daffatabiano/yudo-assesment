import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import usePost from '../hooks/usePost';
import { styles as stylesAuth } from './auth/styles.auth';
import { useState } from 'react';
import { styles } from './views.style';

export default function ProductsDetails() {
  const { id } = useParams();

  const { data } = useFetch(`product/${id}`);
  const { updateProduct } = usePost();
  const [notif, setNotif] = useState({
    message: '',
    status: '',
  });
  const navigate = useNavigate();

  console.log(data.data);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const vendor = e.target.vendor.value;
    const qty = e.target.qty.value;
    const price = e.target.price.value;
    const res = await updateProduct(id, { name, category, vendor, qty, price });
    console.log(res);
    if (res.status === 201) {
      setNotif({
        message: 'Product updated successfully',
        status: 'success',
      });
      setTimeout(() => {
        setNotif({
          message: '',
          status: '',
        });
        navigate('/products');
      }, 2000);
    } else {
      setNotif({
        message: 'Something went wrong',
        status: 'error',
      });
      setTimeout(() => {
        setNotif({
          message: '',
          status: '',
        });
      }, 2000);
    }
  };
  return (
    <div
      style={{
        position: 'fixed',
        display: 'block',
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
          display: 'block',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}>
        {notif.message && (
          <div
            style={{
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: notif.status === 'success' ? 'green' : 'red',
              color: 'white',
              margin: '10px 0',
            }}>
            {notif.message}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h1>Update Product</h1>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{ backgroundColor: 'transparent', border: 'none' }}>
            Close
          </button>
        </div>
        <form onSubmit={handleUpdateProduct}>
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
              defaultValue={data?.data?.name}
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              style={stylesAuth.input}
              defaultValue={data?.data?.category}
            />
            <label htmlFor="vendor">Vendor</label>
            <input
              type="text"
              name="vendor"
              id="vendor"
              placeholder="Vendor"
              style={stylesAuth.input}
              defaultValue={data?.data?.vendor}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <label htmlFor="qty" style={{ width: '30%' }}>
                Quantity
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  placeholder="Quantity"
                  style={stylesAuth.input}
                  defaultValue={data?.data?.qty}
                />
              </label>
              <label htmlFor="price" style={{ width: '70%' }}>
                Price
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                  style={stylesAuth.input}
                  defaultValue={data?.data?.price}
                />
              </label>
            </div>
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
              onClick={() => navigate(-1)}
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
}
