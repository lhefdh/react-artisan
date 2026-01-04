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
  // State pour gérer les données saisies
  const [contactInputs, setContactInputs] = useState(initialForm);
  // State pour définir le début et la fin du Submit
  const [isLoading, setIsLoading] = useState(false);
  // State pour qui sera chargé d'un objet qui décrit l'issue de l'opération
  const [result, setResult] = useState(null);
  // State pour gérer les erreurs
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validation des champs vides
    const hasEmptyField = Object.values(contactInputs).some(
      value => value.trim() === ''
    );

    if (hasEmptyField) {
      setError('Tous les champs sont requis');
      setResult(null);
      return; // Arrête l'envoi du formulaire
    }
    setError(''); // Efface les erreurs précédentes
    setIsLoading(true); // Active l'état de chargement
    setResult(null); // Efface les résultats précédents

    Object.values(contactInputs).some(value => value.trim() === '')


    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      // Envoie la requête POST au serveur
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: headers,
        // Convertit les données en JSON pour l'envoi
        body: JSON.stringify({
          to: contactInputs.email,
          subject: contactInputs.subject,
          text: contactInputs.message,
          html: `<p>${contactInputs.message}</p>`
        })
      });

      const data = await response.json();
      setResult(data);

      // Si l'envoi a réussi
      if (data.success) {
        setContactInputs(initialForm); // Réinitialise le formulaire

        // Efface le message de succès après 5 secondes
        setTimeout(() => setResult(null), 5000);
      } else {
        // Affiche l'erreur retournée par le serveur
        setError(data.message || 'Une erreur est survenue');
      }
      
    } catch (error) {
      // Gère les erreurs de connexion au serveur
      setResult({ 
        success: false, 
        message: 'Erreur de connexion au serveur: ' + error.message
      });
      setError('Erreur de connexion au serveur')
    } finally {
      // Désactive l'état de chargement dans tous les cas (succès ou échec)
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
        {/* Affichage des messages d'erreur */}
        {error && (
        <div className="contactForm-failed">
          <i className="fa-solid fa-circle-exclamation fa-xl mx-2"></i>
          <h3 className="d-inline">{error}</h3>
        </div>
        )}
        {/* Affichage des messages de succès */}
        {result?.success && (
        <div className="contactForm-success">
          <i className="fa-solid fa-circle-check fa-xl mx-2"></i>
          <h3 className="d-inline">
            Message envoyé avec succès !
          </h3>
        </div>
      )}
    </div>
  )
}