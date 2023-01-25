import React from 'react'
import Shelf from '../Shelf/Shelf';
import {Link} from "react-router-dom";

  export default function HomePage(props){

    return <>

        <section className="list-books">

        <header className="list-books-title">

          <h1>MyReads</h1>

        </header>

        <article className="list-books-content mt-5">

            <Shelf title='Currently Reading' myList1={props.myList1} category="currentlyReading" getShelves={props.getShelves}/>
            <Shelf title='Want To Read' myList1={props.myList1} category="wantToRead" getShelves={props.getShelves}/>
            <Shelf title='Read' myList1={props.myList1} category="read" getShelves={props.getShelves}/>
      
        </article>

        <aside className="open-search">

          <Link to="/search" className="open-serch__link"/>

        </aside>

      </section>

      </>
}


