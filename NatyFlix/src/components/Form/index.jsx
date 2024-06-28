import styles from './Form.module.css'
import {categories} from '../Category'
import { useState } from 'react'

function Form (){

    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [cover, setCover] = useState('');
    const [erro, setErros] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    function validaUrl(url) {
      const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;
  
      if (!regex.test(url) || url.length < 43) {
        setErros('URL inválida!');
        return false;
      } else {
        return url.substring(32, 43);
      }
    }
  
    function onSave(e) {
      e.preventDefault();
  
      const urlVideo = validaUrl(url);
      if (urlVideo && category && cover) {
        const newVideo = {
          id: urlVideo,
          title: 'Novo Video', 
          url: url,
          cover: cover,
          category: category
        };
  
        const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
        const updatedVideos = [...storedVideos, newVideo];
        localStorage.setItem('videos', JSON.stringify(updatedVideos));
  
        setUrl('');
        setCategory('');
        setCover('');
        setErros('');
        setSuccessMessage('Video Cadastrado com sucesso!')
      } else {
        setErros('URL, capa ou categoria inválida');
      }
  
      if (!category || category === '-') {
        setErros('Escolha uma categoria');
        return;
      } else {
        setErros('');
      }
    }
  

    return(
    
        
        <section className={styles.container}>

            <h2>Cadastro de videos</h2>


            <form onSubmit={onSave}>

                <div>
                    <label htmlFor="url"> Url do video </label>
                    <input type='text' placeholder='Digite a URL'  required='required' value={url} onChange={e=>setUrl(e.target.value)} maxLength="43" minLength="43"/> 
                </div>

                <div>
                    <label htmlFor="cover"> Capa do video </label>
                    <input type='url' placeholder='Digite a URL da capa'  required='required' value={cover} onChange={e=>setCover(e.target.value)} maxLength="56" minLength="56"/> 
                </div>

                <div>
                    <label htmlFor="Categoria"></label>

                    <select value={category} onChange={e =>setCategory (e.target.value)} required="required">
                     <option value="-">Selecione uma categoria</option>
                    {categories.map(item=>{ return <option value={item}> {item} </option>})}
                    </select>
                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

                <div className={styles.erro}>{erro}</div>
                {successMessage && <div className={styles.success}>{successMessage}</div>}
            </form>



        </section>
    )
}

export default Form