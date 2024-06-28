import styles from './SearchVideo.module.css';
import VideoList from '../../components/VideoList';
import { useState, useEffect } from 'react';

function FilterVideos(videos, searchText) {
    return videos.filter((video) =>
        video.category.toLowerCase().includes(searchText.toLowerCase()) ||
        video.title.toLowerCase().includes(searchText.toLowerCase())
    );
}

function SearchVideo({ videos }) {
    // const foundVideos = FilterVideos(videos, searchText);
    const [searchText, setSearchText] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(() => {
        const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];
        const allVideos = [...videos, ...storedVideos];
        const filtered = FilterVideos(allVideos, searchText);
        setFilteredVideos(filtered);
    }, [videos, searchText]);

    return (
        <section className={styles.container}>
            <h2>Pesquisar</h2>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <VideoList videos={filteredVideos} emptyHeading={`Vídeo não encontrado`} />
        </section>
    );
}

export default SearchVideo;