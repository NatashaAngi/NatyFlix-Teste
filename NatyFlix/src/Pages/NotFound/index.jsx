import styles from './NotFound.module.css'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function NotFound(){
    return(
        <>
        <Header />
        <section className={styles.notfound}>
        <h1>Ops! Página não encontrada </h1>
        </section>
        <Footer />

        </>
    )
}

export default NotFound