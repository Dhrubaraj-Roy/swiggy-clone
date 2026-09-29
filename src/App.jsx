import Home from "./Component/Home"
import FDFRestaurentOptions from "./Component/FDFRestaurentOptions"
import {Routes,Route,BrowserRouter} from "react-router"
import FetchRestaurent from "./Component/FetchRestaurentHeader"
import Head from "./Component/Head"
import { Provider } from "react-redux"
import { store } from "./Store/Stores"
import Checkout from "./Component/Checkout"

function App() {

  return (
    <>
    <Provider store={store}>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route element={<Head></Head>}>
      <Route path="/restaurent" element={<FDFRestaurentOptions></FDFRestaurentOptions>}></Route>
      <Route path="/city/delhi/:id" element={<FetchRestaurent></FetchRestaurent>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
