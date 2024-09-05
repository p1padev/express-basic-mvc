import express from 'express';

type Message = {
  text: string;
  user: string;
  added: Date;
  id: number;
};

let id = 1;

let messages: Message[] = [
  {
    text: 'Hi there!',
    user: 'Example',
    added: new Date(),
    id: 0,
  },
];

const indexRouter = express.Router();

indexRouter.get('/', function (req, res) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

indexRouter.get('/new', function (req, res) {
  res.render('new', { title: 'New message' });
});

indexRouter.post('/new', function (req, res) {
  const message: Message = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
    id: id++,
  };
  messages.push(message);
  res.redirect('/');
});

indexRouter.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  messages = messages.filter((msg) => msg.id !== id);
  res.status(200).send();
});

export default indexRouter;
