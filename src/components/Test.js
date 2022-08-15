import React, { useState } from 'react'
import axios from 'axios'



const Test = () => {
    const[news,setNews] = useState([])
const fun = ()=>{
// console.log("helo print me")
axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e15dda27e8fb4cd68511a778e23c1558')
.then((Response)=>{
    console.log(Response)
    setNews(Response.data.articles)
})
}

  return (
<div className='container my-5'>
<button className='btn btn-primary' onClick={fun}>button</button>
<div className='row'>
{
    news.map((value)=>{
        return (
            <div className='col-md-4'>
<div className="card" style={{ width: "18rem" }}>
  <img src={value.urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.description}</p>
    <a href="#" className="btn btn-primary">Click me</a>
  </div>
</div>

</div>
        )
    })
}
</div>

</div>
  )
}

export default Test