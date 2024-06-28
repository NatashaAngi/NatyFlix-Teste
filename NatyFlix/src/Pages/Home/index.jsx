import styles from './Home.module.css'
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Category,{categories,filterCategory} from "../../components/Category"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Carrosel from '../../components/Carrosel'
import Videos from '../../json/videos.json'
import { useEffect, useState } from 'react'




function Home() {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
   
    if (videos.length === 0) {
      setVideos([...Videos, ...storedVideos]);
    }
  }, [videos]);

  const filterCategory = (id) => {
    return videos.filter(video => video.category === categories[id]);
  };


  return (

  <>
  <Header />
  <Banner image="favoritos" />
  <Container>

   {categories.map((category,index)=><Category category={category}>
    
    <Carrosel>
    {filterCategory(index).map((video)=><Card id={video.id} key={video.id}  title={video.title} cover={video.cover} />)}
    </Carrosel>

    
    </Category>)}
    

  </Container>
  <Footer />
  </>
  )
    
}
export default Home