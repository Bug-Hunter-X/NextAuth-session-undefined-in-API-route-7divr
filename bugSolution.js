```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // ... rest of your API route handler
  return res.status(200).json({ message: 'Success!', session });
};
export default handler;
```