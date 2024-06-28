import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Watch from "./Pages/Watch"
import NotFound from "./Pages/NotFound"
import NovoVideo from "./Pages/NovoVideo"
import Search from "./Pages/Search"
import Favoritos from "./Pages/Favoritos"
import FavProvider from "./Context/Favorite"

function AppRoutes(){
    return(
        <BrowserRouter>
        
        <FavProvider>
        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/Watch/:id" element={<Watch />}></Route>
            <Route path="/NovoVideo" element={<NovoVideo />}></Route>
            <Route path="/Favoritos" element={<Favoritos />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />}></Route>
                
            

        </Routes>
        </FavProvider>
        
        </BrowserRouter>
    )
}

export default AppRoutes