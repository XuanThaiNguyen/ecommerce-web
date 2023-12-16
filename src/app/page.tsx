import Slider from "@/components/Slider/Slider";
import styles from './home.module.css'
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Slider /> */}
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}
