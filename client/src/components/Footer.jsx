
import { company } from '../data';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:'grid', gap:8}}>
          <div style={{fontWeight:800}}>{company.name}</div>
          <div>{company.tagline}</div>
          <div>Email: <a href={`mailto:${company.email}`}>{company.email}</a></div>
          <div>Phone: {company.phones.join(' / ')}</div>
          <div>HQ: {company.hq} • Bases: {company.bases.join(', ')}</div>
          <div style={{fontSize:12, opacity:.8}}>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
