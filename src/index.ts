import express from 'express';
import axios from 'axios';

const app = express();

const url = 'https://api.app.shortcut.com/api/v3/stories/search';

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

app.listen(3001, () => {
  console.log('server listening on port 3001');
});

export { app };
