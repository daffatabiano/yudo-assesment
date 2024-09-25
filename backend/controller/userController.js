import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = password === user.password;
    const token = jwt.sign(
      { id: user.id },
      'Eyhcsadkaskdjkasdka sdkjaskjdjaskasjk',
      {
        expiresIn: '1h',
      }
    );

    if (!isMatch) {
      return res.status(401).json({ message: `Password is incorrect` });
    }

    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    res.status(201).json({ message: 'Login successful', data, token });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(400).json({ message: 'Email already exist' });
  }
};
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'User Deleted' });
  } catch (error) {
    console.log(error.message);
  }
};
