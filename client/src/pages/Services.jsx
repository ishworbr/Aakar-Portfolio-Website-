
import { services } from '../data';
import Card from '../components/Card';

export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid grid-3">
          {services.map((s, idx) => (
            <Card key={idx} title={s.title}>
              <ul className="list">
                {s.points.map((pt, i) => <li key={i}>• {pt}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
