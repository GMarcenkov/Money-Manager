import './database';
import app from './app';

app.listen(process.env.PORT || 5000, () => {
  // eslint-disable-next-line no-console
  console.log('server on port 5000');
});
