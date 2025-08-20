
import { NavLink } from 'react-router-dom';
import { company } from '../data';

export default function Navbar(){
  return (
    <div className="nav">
      <div className="nav-inner container">
        <div className="logo">🏗️ {company.name}</div>
        <div className="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/coverage">Coverage</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
