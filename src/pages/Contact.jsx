import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Enviando...');
  try {
    const res = await fetch('https://portfolio-backend-final-nepn.onrender.com/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Error desconocido');

    setStatus('Enviado con éxito');
    setForm({ nombre: '', email: '', mensaje: '' });

  } catch (err) {
    console.error('ERROR DETECTADO:', err);
    setStatus('Error al enviar: ' + err.message);
  }
};


  return (
    <section id="contacto" className="sectionContact"> 
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje" required />
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}