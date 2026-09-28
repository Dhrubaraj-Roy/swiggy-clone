import Home from "./Component/Home"
import FDFRestaurentOptions from "./Component/FDFRestaurentOptions"
import {Routes,Route,BrowserRouter} from "react-router"
import FetchRestaurent from "./Component/FetchRestaurentHeader"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/restaurent" element={<FDFRestaurentOptions></FDFRestaurentOptions>}></Route>
      <Route path="/city/delhi/:id" element={<FetchRestaurent></FetchRestaurent>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
