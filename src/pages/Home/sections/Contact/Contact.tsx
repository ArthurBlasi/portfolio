import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className='titulo-contact'>
        <h1>Contact</h1>
      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Sua mensagem" required></textarea>
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
      
    </section>
  );
};

export default Contact;
