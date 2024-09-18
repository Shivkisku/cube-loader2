import styles from './CubeLoader.module.css';

const CubeLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.cube}>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
      </div>
    </div>
  );
};

export default CubeLoader;
