import styles from './Search.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import VideoList from '../../components/VideoList'
import Videos from '../../json/videos.json'
import SearchVideo from '../../components/SearcVideo'

function Search (){
    return(
        <>
        <Header />

        <Container>
        <section className={styles.search}>

          <SearchVideo videos={Videos} />

        </section>
        </Container>
        <Footer />
        
        </>
    )
}

export default Search