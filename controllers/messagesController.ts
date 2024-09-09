import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import {
  addMessage,
  deleteMessage,
  getAllMessages,
} from '../models/message.js';

export const validateNewMessage = [
  body('name').notEmpty().withMessage('Name is required').trim().escape(),
  body('message').notEmpty().withMessage('Message is required').trim().escape(),
];

export const messagesListGet = (req: Request, res: Response) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: getAllMessages(),
  });
};

export const messagesCreateItemGet = (req: Request, res: Response) => {
  res.render('new', { title: 'New message' });
};

export const messagesCreateItemPost = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('new', {
      title: 'New message',
      errors: errors.array(),
      oldInput: req.body,
    });
  }
  addMessage(req.body.message, req.body.name);
  res.redirect('/');
};

export const messagesDeleteItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteMessage(id);
  res.status(200).send();
};
