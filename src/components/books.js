// Importing the BookItem component from the specified file path
import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        // Arrow function that takes each book as a parameter
        (book)=>{
            // _id is taking directly from MongoDB  e.g "_id": "65573766b6a9e922682e83f7"
            return <BookItem myBook={book} key={book._id}></BookItem>
        }
    );

}

// Exporting the Books component as the default export of this module
export default Books;
