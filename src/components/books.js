import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            // _id is taking directly from MongoDB  e.g "_id": "65573766b6a9e922682e83f7"
            return <BookItem myBook={book} key={book._id}></BookItem>
        }
    );

}

export default Books;