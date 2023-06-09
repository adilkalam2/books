// import {useState} from 'react';
// import BookCreate from './components/BookCreate';
// import BookList from './components/BookList';

// function App() {
//     const [books, setBooks] = useState([]);

//     const editBookById= (id,newTitle) => {
//         const updatedBooks = books.map((book)=>{
//             if (book.id===id){
//                 return {...book, title: newTitle};
//             }
//             return book;
//         });
//         setBooks(updatedBooks);
//     };

//     const deleteBookById = (id)=> {
//         const updatedBooks = books.filter((book)=>{
//             return book.id !== id;
//         });
//         setBooks(updatedBooks);
//     };



//     const createBook = (title) => {
//        const updatedBooks= [
//         ...books, {id: Math.round(Math.random()*9999), title}
//        ];
//        setBooks(updatedBooks);
//     };
//     return(
//         <div className="app">
//             <h1>Reading list</h1>
//             <BookList onEdit={editBookById} books= {books} onDelete={deleteBookById}/>  //creating props books for BookList
//             <BookCreate onCreate={createBook}/>
//         </div>
//     ) ;
// }
// export default App;



import { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;