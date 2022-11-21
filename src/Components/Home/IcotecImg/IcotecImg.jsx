import React from 'react'
import'./IcotecImg.css'
import html from '../../../assets/iconostec/html.png';
import CSS from '../../../assets/iconostec/CSS.png';
import JS from '../../../assets/iconostec/JS.png';
import Nd from '../../../assets/iconostec/Nd.png'
import sql from '../../../assets/iconostec/sql.png'
import mon from '../../../assets/iconostec/mon.png'
import Opa from '../../../assets/iconostec/Opa.png'
import jest from '../../../assets/iconostec/jest.png'
import reac from '../../../assets/iconostec/reac.png'
import jen from '../../../assets/iconostec/jen.png'
import Dev from '../../../assets/iconostec/Dev.png'
import dock from '../../../assets/iconostec/do.png'


function IcotecImg() {
  return (
    <div className="iconostec">
          <img className="icotec"  src={html} alt="logo-html" width="30px" height="30px" />
          <img className="icotec" src={CSS} alt="logo-javascript" width="30px" height="30px" />
          <img className="icotec" src={JS} alt="logo-css" width="30px" height="30px" />
          <img className="icotec" src={Nd} alt="logo-nodejs" width="30px" height="30px" />
          <img className="icotec" src={sql} alt="logo-sql" width="30px" height="30px" />
          <img className="icotec" src={mon} alt="logo-mongo" width="30px" height="30px" />
          <img className="icotec" src={Opa} alt="logo-OAUTh" width="30px" height="30px" />
          <img className="icotec" src={jest} alt="logo-jest" width="30px" height="30px" />
          <img className="icotec" src={reac} alt="logo-reac" width="30px" height="30px" />
          <img className="icotec" src={dock} alt="logo-docker" width="30px" height="30px" />
          <img className="icotec" src={jen} alt="logo-jenkings" width="30px" height="28px" />
          <img className="icotec" src={Dev} alt="logo-devops" width="30px" height="30px" />
      </div>
  )
}

export default IcotecImg