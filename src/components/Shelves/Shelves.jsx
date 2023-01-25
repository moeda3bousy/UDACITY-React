import React from 'react'
import Book from '../Books/Books'

export default function ShelfSearch(props){

        return <>
            
            <section className="bookshelf">
             
              <h3 className="bookshelf-title">mySearch</h3>
             
              <article className="bookshelf-books mt-5">
               
                <ul className="books-grid">

             {props.myProgress?props.myList.map((mybook,idx)=>(<Book key={idx}  book={mybook} getShelves={props.getShelves}/> ))
             :(props.myList)}
                
                </ul>

              </article>
            </section>  
      </>
       
    }

