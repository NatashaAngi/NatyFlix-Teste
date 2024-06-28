import { useParams } from 'react-router-dom'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NotFound from '../NotFound'
import Videos from '../../json/videos.json'
import styles from './Watch.module.css'
import { useEffect, useState } from 'react'

function Watch(){

  const parametros = useParams()
  const{id} =useParams()

  const video =  Videos.find((video)=>{return video.id === parametros.id})

  const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || []; // Recupera vídeos do localStorage
    const allVideos = [...Videos, ...storedVideos]; // Combina vídeos do JSON local com os do localStorage
    const foundVideo = allVideos.find(video => video.id === id); // Encontra o vídeo pelo ID nos parâmetros da URL

    setSelectedVideo(foundVideo); // Define o vídeo encontrado no estado
  }, [id]); // Executa o useEffect sempre que o ID nos parâmetros da URL mudar

  if (!selectedVideo) {
    return <NotFound />; // Se não encontrar o vídeo, exibe a página NotFound
  }




    return(
       <>
       <Header />
        <Container>
        <section className={styles.watch}>

         <iframe 
          width="854"
          height="480" 
          src={`https://www.youtube.com/embed/${selectedVideo.id}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>


            
        </section>
        </Container>
       <Footer />
       </>
    )
}

export default Watch