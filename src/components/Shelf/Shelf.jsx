import React from 'react'
import Books from '../Books/Books'


export default function Shelf(props){
    const myShelvesll = props.myList1.filter((book)=> book.shelf === props.category)


    return <>
        <section className="bookshelf">
              <h3 className="bookshelf-title mt-3 pb-3 fw-bold ms-2">{props.title}</h3>
              <article className="bookshelf-books mt-3">
                <ul className="books-grid">
                 {myShelvesll.map((mybook,idx)=>(

                 <Books key={idx}  book={mybook} getShelves={props.getShelves}/>

                 ))}
                </ul>
              </article>
            </section>  
            </>
}


