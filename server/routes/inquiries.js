
import { Router } from 'express';
import Inquiry from '../models/Inquiry.js';
import { isEmail, isPhone } from '../utils/validate.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!isEmail(email)) return res.status(400).json({ error: 'Invalid email' });
    if (phone && !isPhone(phone)) return res.status(400).json({ error: 'Invalid phone' });

    const doc = await Inquiry.create({ name, email, phone, subject, message });
    return res.json({ ok: true, inquiry: doc });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const list = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
