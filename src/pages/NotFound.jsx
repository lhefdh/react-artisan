import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NotFound({onSetShow}) {
  useEffect(() => {
      const hideHeaderFooter = () => {
        onSetShow(false)
    };
    hideHeaderFooter();
    console.log('render')
    },[onSetShow]);
  const showHeaderFooter = () => {
    onSetShow(true)
  }

  return (
    <>
    <div id="notFound-container" className="d-flex flex-column justify-content-center align-items-center">
      <h1><strong>La page que vous cherchez n'existe pas <span className="warming">!!!</span></strong></h1>
      <p>Retour à la page d'accueil</p>
      <NavLink to ="/" >
        <i onClick={showHeaderFooter} className="home-icon fa-solid fa-house fa-2xl"/>
      </NavLink>
    </div>
    </>
  )
}