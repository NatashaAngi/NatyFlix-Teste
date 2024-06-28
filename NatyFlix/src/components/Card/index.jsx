import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import Icon1 from './favorite.png'
import Icon2 from './unfavorite.png'
import { UseFavoriteContext } from '../../Context/Favorite'

function Card ({id, title, url, cover,onDelete }){

 const {favorite,addFavorite} = UseFavoriteContext()

 const isFav = favorite.some((fav)=>fav.id === id)
 const icon = isFav ? Icon2 : Icon1

 const handleDelete = () => {
   
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    const updatedLocalStorage = storedVideos.filter(video => video.id !== id);
    localStorage.setItem('videos', JSON.stringify(updatedLocalStorage));

   
  };


    return (
        <section className={styles.card}>

            <Link to= {`/Watch/${id}`}>
            
           
                
                <img className={styles.capa} src={cover}alt="" />    
             </Link>

             <figure className={styles.icone}>

                <img src={icon} onClick={()=>addFavorite({id})}/>

             </figure>

             <button onClick={handleDelete} className={styles.deleteButton}>
          Excluir
        </button>
             


        </section>
    )
}

export default Card