import React, { useState } from 'react';
import Modal from 'react-modal';
import { UseFavoriteContext } from '../../Context/Favorite';
import styles from './EditVideoModal.module.css';

Modal.setAppElement('#root');

function EditVideoModal({ isOpen, closeModal, video }) {
  const { favorite, addFavorite } = UseFavoriteContext();
  const [editedVideo, setEditedVideo] = useState({ ...video });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo({ ...editedVideo, [name]: value });
  };

  const handleSaveChanges = () => {
    // Aqui você pode adicionar lógica para validar os campos editados antes de salvar
    if (editedVideo.title && editedVideo.url && editedVideo.category) {
      // Aqui você pode adicionar lógica para atualizar o estado local ou o localStorage
      console.log('Salvando alterações:', editedVideo);
      closeModal();
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <h2>Editar Vídeo</h2>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedVideo.title}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              id="url"
              name="url"
              value={editedVideo.url}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="category">Categoria:</label>
            <select
              id="category"
              name="category"
              value={editedVideo.category}
              onChange={handleInputChange}
            >
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
              <option value="categoria3">Categoria 3</option>
              {/* Adicione opções dinâmicas baseadas nas categorias disponíveis */}
            </select>
          </div>

          {errorMessage && <div className={styles.error}>{errorMessage}</div>}

          <div className={styles.buttons}>
            <button onClick={handleSaveChanges} className={styles.saveButton}>
              Salvar
            </button>
            <button onClick={closeModal} className={styles.cancelButton}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditVideoModal;