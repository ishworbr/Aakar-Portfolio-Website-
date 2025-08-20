
import { company, principles } from '../data';
import Badge from '../components/Badge';

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>
            Delivering Trust in Valuation & Engineering Services
          </h1>
          <p>
            {company.tagline}. Based in {company.bases.join(' & ')}, serving banks, municipalities, and clients across the region.
          </p>
          <div className="hero-cta">
            <a className="btn" href="/services">Explore Services</a>
            <a className="btn secondary" href="/contact">Get a Quote</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Working Principles</h2>
          <div className="badges">
            {principles.map((p,i) => <Badge key={i}>{p}</Badge>)}
          </div>
        </div>
      </section>
    </div>
  );
}
