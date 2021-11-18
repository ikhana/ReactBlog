import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <h1 style={{
      fontSize: 30,
      color: "black",
      textAlign: "center",
      paddingTop: "50px",
     }}>The new start Insha Allah</h1>
     <Navbar/>
     <div className='content'>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="blogs/:id" element={<BlogDetails/>} />
      <Route path="*" element={<NotFound />} />
      

      
      
      </Routes>
      
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
