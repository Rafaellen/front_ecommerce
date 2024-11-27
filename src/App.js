import React, {useState} from 'react';
import './App.css';
import UserAccountForm from './UserAccountForm';
import 'bootstrap/dist/css/bootstrap.min.css';
//metodos de gestão da página



function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Titulo Principal</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className='nav-item'>
              <button ClassName="nav-link btn" onClick={()=>handleNavClick('createAccount')}>Criar conta</button>
            </li>
            <li className='nav-item'>
             <button ClassName="nav-link btn" onClick={()=>handleNavClick('login')}>Login</button>
            </li>
            <li className='nav-item'>
              <button ClassName="nav-link btn" onClick={()=>handleNavClick('logout')}>Sair</button>
            </li>
          </ul>
        </div>
      </nav>
      {/*Conteudo principal*/}
      <div className="conteiner text-center mt-5">
        {currentPage === 'landing' && (
          <div className='mt-4'>
            <h1 className="display-4">Segundo Bimestre</h1>
          </div>  
        )}

        {/*criar conta*/}
        {currentPage === 'createAccount' && (
          <div className='mt-4'>
            <UserAccountForm/>
          </div>  
        )}

        {/*login*/}
        {currentPage === 'login' && (
          <div className='mt-4'>
            <h1 className="display-4">Adicionar o Form de Login</h1>
          </div>  
        )}

        {/*logout*/}
        {currentPage === 'logout' && (
          <div className='mt-4'>
            <h1 className="display-4">Sair</h1>
          </div>  
        )}
        
      </div>
    </div>
  );
}

export default App;