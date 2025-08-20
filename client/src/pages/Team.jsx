
import { team } from '../data';
import Card from '../components/Card';

export default function Team(){
  return (
    <section className="section">
      <div className="container">
        <h2>Local Team & Contacts</h2>
        <div className="grid grid-3">
          {team.map((m, i) => (
            <Card key={i} title={m.name}>
              <div className="muted">{m.role}</div>
              <div><strong>Base:</strong> {m.base}</div>
              <div><strong>Areas:</strong> {m.areas.join(', ')}</div>
              <div><strong>Phone:</strong> <span className="kbd">{m.phone}</span></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
