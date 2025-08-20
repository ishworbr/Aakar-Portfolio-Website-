
import { useState } from 'react';

const API = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [status, setStatus] = useState(null);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch(`${API}/api/inquiries`, {
        method:'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.error || 'Failed');
      setStatus('Thanks! We will reach out soon.');
      setForm({ name:'', email:'', phone:'', subject:'', message:'' });
    } catch(err){
      setStatus(err.message);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input className="input" name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
      <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
      <input className="input" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} required />
      <textarea className="textarea" name="message" placeholder="Message" rows="6" value={form.message} onChange={onChange} required></textarea>
      <button className="btn" type="submit">Send Inquiry</button>
      {status && <div className="muted">{status}</div>}
    </form>
  );
}
