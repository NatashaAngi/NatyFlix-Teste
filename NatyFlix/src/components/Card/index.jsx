import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import Icon1 from './favorite.png'
import Icon2 from './unfavorite.png'
import { UseFavoriteContext } from '../../Context/Favorite'
import { useState } from 'react'
import Modal from 'react-modal';

function Card ({id, title, url, cover,onDelete }){

 const {favorite,addFavorite} = UseFavoriteContext()

 const [isModalOpen, setIsModalOpen] = useState(false);
 const [editedTitle, setEditedTitle] = useState(title); 
 const [editedUrl, setEditedUrl] = useState(url); 
 const [editedCover, setEditedCover] = useState(cover); 



 const isFav = favorite.some((fav)=>fav.id === id)
 const icon = isFav ? Icon2 : Icon1

 const [videos, setVideos] = useState(JSON.parse(localStorage.getItem('videos')) || []);



 const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};


 const handleDelete = () => {
  
   const updatedLocalStorage = videos.filter(video => video.id !== id);
   localStorage.setItem('videos', JSON.stringify(updatedLocalStorage));

  
   setVideos(updatedLocalStorage);
 };



 const handleEdit = () => {
  
  closeModal(); 
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
             

        <button onClick={handleDelete} className={styles.deleteButton}>
        Excluir
      </button>

      <button onClick={openModal} className={styles.editButton}>
        Editar
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Editar Vídeo</h2>
        <form onSubmit={handleEdit}>
          <div>
            <label htmlFor="editedTitle">Título:</label>
            <input
              type="text"
              id="editedTitle"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="editedUrl">URL:</label>
            <input
              type="text"
              id="editedUrl"
              value={editedUrl}
              onChange={(e) => setEditedUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="editedCover">Capa:</label>
            <input
              type="text"
              id="editedCover"
              value={editedCover}
              onChange={(e) => setEditedCover(e.target.value)}
              required
            />
          </div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
        </form>
      </Modal>

        </section>
    )
}

export default Card