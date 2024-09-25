import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  Login,
} from '../controller/userController.js';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controller/productController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/users', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/login', Login);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/products', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
