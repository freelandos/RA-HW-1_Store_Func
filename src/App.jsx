import { ShopItemFunc } from './components/ShopItemFunc';
import styles from './App.module.css';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["background-element"]}>
        </div>
        <div className={styles["highlight-window"]}>
          <div className={styles["highlight-overlay"]}></div>
        </div>
        <div className={styles["window"]}>
          <ShopItemFunc item={item} />
        </div>
      </div>
    </>
  )
}

export default App
