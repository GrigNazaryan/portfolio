import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [sendCount, setSendCount] = useState(() => {
    const saved = localStorage.getItem('sendCount');
    return saved ? Number(saved) : 0;
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e0p6zqp',
      'template_to4alkk',
      form.current,
      'mcnul6eHahCA4Mqbr'
    )
    .then(() => {
      alert('✅ Сообщение отправлено!');
      setSendCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('sendCount', newCount); 
        return newCount;
      });
      e.target.reset();
    }, (error) => {
      console.error('Ошибка:', error);
      alert('❌ Ошибка при отправке.');
    });
  };

  return (
    <section>
      <div className="stat-number">{sendCount}</div>
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-sub">I’m currently available for freelance work</p>

      <button
        className="message-button-top"
        onClick={() => form.current.scrollIntoView({ behavior: 'smooth' })}
      >
        Send Me A Message
      </button>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
        />
        <textarea
          name="message"
          placeholder="Enter your needs"
          rows="5"
          required
        />
        <button type="submit">Send Message 🚀</button>
      </form>
    </section>
  );
};

export default Contact;
