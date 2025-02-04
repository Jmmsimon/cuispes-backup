import React from 'react';
import styles from './CatarataYumbilla.module.css';
import Botones from '../Botones';

const CatarataYumbilla = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catarata Yumbilla</h1>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15874.029346218993!2d-77.93417565622113!3d-5.924562954953781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x91b4201bbf0b9ba1%3A0x51de394afbdf0173!2sCuispes!3m2!1d-5.9285726!2d-77.9438811!4m5!1s0x91b69feb8e260981%3A0x3508902b9bd02e8e!2sCatarata%20Yumbilla!3m2!1d-5.9200957!2d-77.9038707!5e0!3m2!1ses!2spe!4v1724881011339!5m2!1ses!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info}>
          <h2>Información de la Ruta</h2>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <h3>Tiempo</h3>
              <p>1 h 54 min</p>
            </div>
            <div className={styles.stat}>
              <h3>Distancia</h3>
              <p>5,1 km</p>
            </div>
            <div className={styles.stat}>
              <h3>Carreteras</h3>
              <p>Sin nombre</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel positivo</h3>
              <p>690 m</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel negativo</h3>
              <p>227 m</p>
            </div>
          </div>
        </div>
      </div>
      <Botones prevPath="/cascada-cristal" nextPath="/senderismo" />
    </div>
  );
};

export default CatarataYumbilla;
