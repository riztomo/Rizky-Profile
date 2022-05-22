import foto_diri from './pictures/foto_diri.jpg';
import React from 'react';

import './header.css';

function Header(props) {
  return (
    <div>
      <header className="App-header">
        <p></p>
        <h2>PROFIL DIRI</h2>
        <h3 className='Nama-depan'>Rizky</h3>
        <p></p>
        <img src={foto_diri} className="Foto-diri" alt="logo" />
        <p></p>
        <a href="/biodata">Biodata</a>
        <a href="/credit">Credits</a>
        <p></p>
      </header>
    </div>
  );
}

export default Header;