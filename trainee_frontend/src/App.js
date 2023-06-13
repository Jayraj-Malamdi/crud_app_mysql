import logo from './logo.svg';
import './App.css';

// Components
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddBook from './components/AddBook'; // Corrected import statement
import EditBook from './components/EditBook'; // Corrected import statement

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CodeforInterview />} />
        <Route path='/add' element={<AddBook />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/edit/:id' element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
