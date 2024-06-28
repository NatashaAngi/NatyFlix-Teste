import { UseFavoriteContext } from '../../Context/Favorite'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import VideoList from '../../components/VideoList'
import styles from './Favoritos.module.css'

function Favoritos (){

    const {favorite} = UseFavoriteContext()
    return(
        <>
        
        <Header />

        <Container>

        

        <section className={styles.favoritos}>
         <h2>Meus Favoritos</h2>   

            {<VideoList videos={favorite} />}
        </section>


        </Container>

        <Footer />
        </>
    )
}

export default Favoritos