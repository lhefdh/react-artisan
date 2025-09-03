import React, { useState } from 'react';


const initialForm = {
  firstName: '',
  lastName:'',
  phone:'',
  email: '',
  subject:'',
  message: ''
  }
export default function ContactForm() {

  const [contactInputs, setContactInputs] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
 const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          to: contactInputs.email,
          subject: contactInputs.subject,
          text: contactInputs.message,
          html: `<p>${contactInputs.message}</p>`
        })
      });

      const data = await response.json();
      setResult(data);

      if (data.success) {
        setContactInputs(initialForm);
      } else {
        setError(true);
      }
      
    } catch (error) {
      
      setResult({ 
        success: false, 
        message: 'Erreur de connexion au serveur: ' + error.message
      });
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div id="contactForm-container">
        <form onSubmit={handleSubmit} className="d-flex flex-row justify-content-center">
          <div className="row col-sm-12 col-md-10 col-lg-8  g-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input 
              type="text" 
              placeholder='Prénom' 
              className="form-control" 
              value={contactInputs.firstName} 
              onChange={(event)=>{setContactInputs({...contactInputs, firstName:event.target.value})}}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input 
              type="text" 
              placeholder='Nom' 
              className="form-control" 
              value={contactInputs.lastName} 
              onChange={(event)=>{setContactInputs({...contactInputs, lastName:event.target.value})}}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input 
              type="text" 
              placeholder='Téléphone' 
              className="form-control" 
              value={contactInputs.phone} 
              onChange={(event)=>{setContactInputs({...contactInputs, phone:event.target.value})}}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input 
              type="text" 
              placeholder='Email' 
              className="form-control" 
              value={contactInputs.email} 
              onChange={(event)=>{setContactInputs({...contactInputs, email:event.target.value})}}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input 
              type="text" 
              placeholder='Objet' 
              className="form-control" 
              value={contactInputs.subject} 
              onChange={(event)=>{setContactInputs({...contactInputs, subject:event.target.value})}}/>
            </div>
            <div className="col-12">
              <textarea 
              className="form-control w-100" 
              placeholder="Message"  
              rows="3" 
              value={contactInputs.message} 
              onChange={(event)=>{setContactInputs({...contactInputs, message:event.target.value})}}/>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" disabled={isLoading} className="btn btn-primary">{isLoading ? 'Envoi...' : 'Envoyer'}</button>
            </div>
          </div>
        </form>
        {(result && !error)? (
          <div className="contactForm-success">
            <i className="fa-solid fa-square-check fa-xl mx-2"></i>
            <h3 className="d-inline">Email envoyé avec succès!</h3>
          </div>
        ): (result && error)? (
        <div className="contactForm-failed">
          <i class="fa-solid fa-circle-exclamation fa-xl mx-2"></i>
          <h3 className="d-inline">Tous les champs sont requis!</h3>
        </div>
        ) : ''}
    </div>
  )
}