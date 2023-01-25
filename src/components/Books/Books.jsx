import React from "react";
import './Books.css'

export default function Books(props){
 
  function getNewShelf(e){
   
    props.getShelves(props.book, e.target.value);
 
  };

    return <>
        <section className="book me-5 mt-2">
          
          <article className="book-top">
           
            <figure className="book-cover m" style={{backgroundImage:`url(${props.book.imageLinks?.smallThumbnail})`}}></figure>

            <figcaption className="book-shelf-changer">

              <select value={props.book.shelf || "none"} onChange={getNewShelf}>

                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="read">Read</option>
                <option value="wantToRead">Want to Read</option>
                <option value="none">None</option>
             
              </select>
           
            </figcaption>

          </article>

          <p className="book-title mb-0">{props.book.title}</p>
          <p className="book-authors">{props.book.authors}</p>
       
        </section>
   
      </>
  }

