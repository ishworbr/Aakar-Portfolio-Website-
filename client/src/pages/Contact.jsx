
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

export default function Contact(){
  return (
    <section className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="grid" style={{gridTemplateColumns:'1.2fr 1fr'}}>
          <ContactForm />
          <Map />
        </div>
      </div>
    </section>
  );
}
