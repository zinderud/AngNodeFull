import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => res
    .status(200)
    .send({ message: 'Welcome Back Mr Anderson I miss you...!' }));

module.exports = () => router;
