import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
          <Link to="/"> <span className={styles.logo}> NatyFlix</span> </Link> 
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/NovoVideo">Novo Vídeo</Link>
                <Link to="/Favoritos">Favoritos</Link>
                <Link to="/Search">Pesquisar</Link>
                
            </nav>

        </header>
    )
}

export default Header