import React from 'react'
import {Link} from "react-router-dom";
import Shelves from '../Shelves/Shelves';

export default function Searching(props){

    return <>
        <section className="search-books">

            <article className="search-books-bar">

              <Link to="/" className="close-search"/>

              <header className="mb-0 search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" onChange={props.getMySearch}/>

              </header>

            </article>

            <Shelves myList={props.myList} getShelves={props.getShelves} myProgress={props.myProgress}/>
        
          </section>
          </>
}


