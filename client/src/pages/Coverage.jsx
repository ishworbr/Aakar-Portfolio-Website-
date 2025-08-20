
import { coverage } from '../data';
import Card from '../components/Card';

export default function Coverage(){
  return (
    <section className="section">
      <div className="container">
        <h2>Service Coverage</h2>
        <p className="muted">{coverage.notes}</p>
        <Card>
          <div className="badges">
            {coverage.districts.map((d, i) => (<span className="badge" key={i}>{d}</span>))}
          </div>
        </Card>
      </div>
    </section>
  );
}
