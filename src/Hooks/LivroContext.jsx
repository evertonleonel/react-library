import React from 'react';

export const LivroContext = React.createContext();

export const LivrosArmazenados = ({children}) => {
  const [loadLivros, setLoadLivros] = React.useState(null)
  const [livros, setLivros] = React.useState(null);

   const fetchLivro  = async  () => {
      const response = await fetch('http://localhost:5000/books');
      const json = await response.json();
      setLivros(json);
      return true
    }
  
  return <LivroContext.Provider 
  value={
    {
    fetchLivro,
    livros,
    setLivros,
    loadLivros,
    setLoadLivros
  }}>{children}</LivroContext.Provider>
}