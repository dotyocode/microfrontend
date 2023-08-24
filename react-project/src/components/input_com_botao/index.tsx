import React from 'react';
import pubsub from 'pubsub-js';
import styles from './styles.module.css';
import logo from '../../assets/logo.png'; // Importando a imagem da logo


const ModuloMensagemTeste = () => {
    return (
<div >
<div className={styles.logo}>
        <img src={logo} alt="Logo Star Wars" />
      </div>
      <hr/>
    <div className={styles.app}>
      <nav className={styles.menu}>
        <ul className={styles.menu_list}>
          <li><p >HOME</p></li>
          <li><p >PLANETS</p></li>
          <li><p >CHARACTERS</p></li>
          <li><p>MOVIES</p></li>
        </ul>
      </nav>

    </div>
    <hr></hr>
</div>

    );
};

export default ModuloMensagemTeste;
