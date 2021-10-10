import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

const url = 'https://api.app.shortcut.com/api/v3/stories/search';

app.use(cors());

app.get('/', (req, res) => res.json({ hello: 'world' }));

app.get('/test', async (req, res) => {
  const stories = await axios.post(
    url,
    { archived: false },
    {
      headers: {
        'Shortcut-Token': process.env.SHORTCUT_TOKEN!,
        'Content-Type': 'application/json',
      },
    }
  );
  res.json(stories.data);
});

app.listen(process.env.PORT || 3001, () => {
  console.log('server listening on port 3001');
});

export { app };
