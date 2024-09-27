import { useCallback, useState } from 'react';
import useFetch from '../hooks/useFetch';
import LayoutDashbaord from '../layout/LayoutDashboard';
import { styles } from './views.style';
import { styles as stylesAuth } from './auth/styles.auth';
import usePost from '../hooks/usePost';
import { Link } from 'react-router-dom';

const Card = (props) => {
  console.log(props, 'props');

  return (
    <div style={{ ...styles.card, minHeight: '40vh' }}>
      <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
        {props.active ? 'Active' : 'Inactive'} Products : {props.total}
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
        <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
          {name}
        </p>
        <h3 style={{ margin: '0', textAlign: 'center' }}>Rp.{props.price}</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            margin: '10px',
          }}>
          <Link
            to={`/dashboard/product/${props.id}`}
            style={{
              ...styles.button,
              textAlign: 'center',
              textDecoration: 'none',
            }}>
            Edit
          </Link>
          <button
            type="button"
            onClick={() => props.showModalDelete(props.id)}
            style={{ ...styles.button, backgroundColor: '#ff0000' }}>
            Delete
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
          }}>
          <p style={{ margin: '0', fontWeight: 'bold', textAlign: 'center' }}>
            {props.vendor}
          </p>
          <p
            style={{
              margin: '0',
              fontWeight: 'lighter',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
            {props.category}
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
            backgroundColor: props.active ? '#00ff00' : '#ff0000',
            display: 'flex',
          }}
        />
      </div>
    </div>
  );
};

const Modal = ({
  title,
  setShowModal,
  showModal,
  handleCreateProduct,
  notify,
}) => {
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
          <p
            style={{
              color: notify?.status ? 'green' : 'red',
              display: notify?.status ? 'block' : 'none',
              textAlign: 'center',
            }}>
            {notify?.message}
          </p>
          <h1>{title} Product</h1>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: 'transparent', border: 'none' }}>
            Close
          </button>
        </div>
        <form onSubmit={handleCreateProduct}>
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
            <div style={{ display: 'flex', gap: '10px' }}>
              <label htmlFor="qty" style={{ width: '30%' }}>
                Quantity
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  placeholder="Quantity"
                  style={stylesAuth.input}
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

const ModalDelete = ({
  setShowModal,
  showModal,
  handleDeleteProduct,
  notify,
}) => {
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
          display: showModal ? 'block' : 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}>
        <p
          style={{
            color: 'green',
            display: notify.status ? 'block' : 'none',
            textAlign: 'center',
          }}>
          {notify.message}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <h1>Delete Product</h1>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: 'transparent', border: 'none' }}>
            Close
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
          }}>
          <p>Are you sure want to delete this product?</p>
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
            <button
              type="button"
              onClick={handleDeleteProduct}
              style={{ ...styles.button, width: '100px' }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const { data } = useFetch('products');
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const { createProduct, deleteProduct } = usePost();
  const [notify, setNotify] = useState({});
  const [id, setId] = useState();

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const vendor = e.target.vendor.value;
    const qty = e.target.qty.value;
    const price = e.target.price.value;
    const res = await createProduct({ name, category, vendor, qty, price });

    if (res.status === 201) {
      setNotify({
        message: 'Product created successfully',
        status: 'success',
      });
      setTimeout(() => {
        setNotify({});
        setShowModalCreate(false);
      }, 2000);
    } else {
      setNotify({
        message: 'Something went wrong',
        status: 'error',
      });
      setTimeout(() => {
        setNotify({});
      }, 2000);
    }
  };

  const handleDeleteProduct = async () => {
    const res = await deleteProduct(id);
    if (res.status === 200) {
      setShowModalDelete(false);
      setNotify({
        message: 'Product deleted successfully',
        status: 'success',
      });
      setTimeout(() => {
        setNotify({});
      }, 2000);
    } else {
      setNotify({
        message: 'Something went wrong',
        status: 'error',
      });
      setTimeout(() => {
        setNotify({});
      }, 2000);
    }
  };

  const handleDelete = (id) => {
    setShowModalDelete(true);
    setId(id);
  };

  return (
    <LayoutDashbaord>
      <ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        handleDeleteProduct={handleDeleteProduct}
        notify={notify}
      />
      <Modal
        title={'Create'}
        notify={notify}
        showModal={showModalCreate}
        setShowModal={setShowModalCreate}
        handleCreateProduct={handleCreateProduct}
      />
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
            onClick={() => setShowModalCreate(true)}
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
              {...item}
              showModalDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      </div>
    </LayoutDashbaord>
  );
}
