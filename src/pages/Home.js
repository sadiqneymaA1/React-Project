import React from 'react';
import NewArticle from '../components/Article';
import'./Home.css'

class Home extends React.Component {
    render() {
      return(
        <div>
          <h1> Welcome To Times News</h1>

        

  <NewArticle/>
  
  </div>
      ) 

     
        
      
    }
  }

  export default Home;