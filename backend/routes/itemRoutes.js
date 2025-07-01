import express from 'express'
import { addItems, getItems } from '../controller/itemController.js';

const router = express.Router();

router.route("/items")
      .get(getItems)
      .post(addItems)

export default router;