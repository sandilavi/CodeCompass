import CodeCompass from 'assets/images/CodeCompassLogo/CodeCompassLogo.png';
import styles from 'ui-component/component.module.css'

// ==============================|| LOGO ||============================== //

const Logo = () => {
  return <img src={CodeCompass} alt="CodeCompass" width="100" className={styles.logosize} />;
};

export default Logo;
