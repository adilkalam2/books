import BookShow from './BookShow';

function BookList({books, onDelete, onEdit}) { // books is a prop coming from app.js
const renderedBooks = books.map((book) =>{
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>;
});

   return <div className='book-list'> {renderedBooks} </div>;
}
export default BookList;