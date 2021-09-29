
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './Component/News/News';
import Header from './Component/Header/Header';

function App() {
  
  const[news,setNews]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=28ecbd2a44fa4cef8ce67328c1503b8f')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[]);
  return (
    <div>
    <Header></Header>
  {
    news.length===0 ?<Spinner animation="border" variant="primary" />:<Row xs={1} md={3} lg={4} className="g-4">
    {news.map(nw=><News News={nw}></News>)}
  </Row>
  }

</div>
  );
};

export default App;
