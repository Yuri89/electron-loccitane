import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Test from './pages/Test/test.tsx';
import { ThemeProvider, useTheme } from 'styled-components';
import light from './styles/themes/light.ts';
import dark from './styles/themes/dark.ts';
import { GlobalStyle } from './styles/GlobalStyles.ts';
import { ProviderTheme } from './hooks/ToggleTheme/toggleTheme.tsx';
import Dados from './pages/Dados/dados.tsx';
import Estoque from './pages/Estoque/estoque.tsx';
import Gestao from './pages/Gestao/gestao.tsx';
import Perfil from './pages/Perfil/perfil.tsx';
import Configuracoes from './pages/Configuracoes/configuracoes.tsx';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderTheme>
      <Router>
      
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/dados' element={<Dados/>}/>
          <Route path='/estoque' element={<Estoque/>}/>
          <Route path='/gestao' element={<Gestao/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/config' element={<Configuracoes/>}/>
        </Routes>
        <GlobalStyle />
      </Router> 
    </ProviderTheme>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)

})


