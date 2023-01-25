import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as API from "./BooksAPI";
import Searching from "./components/Searching/Searching";
import HomePage from "./components/HomePage/HomePage";

export default function App() {

  const [myList1, setmyList1] = useState([]);
  
  const [myProgress, setmyProgress] = useState(false);
  
  const [myList, setmyList] = useState([]);

  const [myProgress2, setmyProgress2] = useState();


  useEffect(()=> {API.getAll().then((myresponse) => { setmyList1(myresponse);});})

  useEffect(()=> {getMySearchll(myProgress2)},[myProgress2])



      async function getMySearchll(myProgress2){
        
        await API.search(myProgress2).then(myresponse => {
        
          if (myresponse && !myresponse.error) {
        
            setmyList(myresponse.map(myList1Search => {
        
              myList1.forEach(theList => {
        
                if ( theList.id === myList1Search.id ) myList1Search.shelf = theList.shelf
        
              })
        
              return myList1Search;
        
            }),
        
            setmyProgress(true)
        
            );
        
          } else {
        
            setmyList(`there are no books with this name:  '${myProgress2}'`)
        
            setmyProgress(false)
        
          }
        
        });
        
      };

      function getMySearch(e){

        setmyProgress2(e.target.value)
        console.log(e.target.value)

         };



         async function getShelves(theList, myShelves){

          await API.update(theList, myShelves);
      
          await API.getAll().then(myresponse => {
      
            setmyList1(myresponse);
      
          });
      
          getMySearchll(myProgress2)
      
        };
      

    return<>

      <Router>

          <Switch>

            <Route path="/search"><Searching getMySearch={getMySearch} myList={myList} getShelves={getShelves} myProgress={myProgress}/></Route>
           
            <Route path="/"><HomePage myList1={myList1} getShelves={getShelves}/></Route>
          
          </Switch>

      </Router>
      
      </> 
}


