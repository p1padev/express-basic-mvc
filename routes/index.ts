import express from 'express';
import {
  messagesCreateItemGet,
  messagesCreateItemPost,
  messagesDeleteItem,
  messagesListGet,
  validateNewMessage,
} from '../controllers/messagesController.js';

const indexRouter = express.Router();

indexRouter.get('/', messagesListGet);

indexRouter.get('/new', messagesCreateItemGet);

indexRouter.post('/new', validateNewMessage, messagesCreateItemPost);

indexRouter.delete('/delete/:id', messagesDeleteItem);

export default indexRouter;
