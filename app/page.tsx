'use client'
import React from 'react'
import axios from 'axios'


const page = () => {

  const [data, setdata]=React.useState([]);
  const [loading, setloading]=React.useState(false);

  const datas=async()=>{
    setloading(true);
    const res=await axios.get("http://localhost:3000/api/blogs");
    setdata(res.data);
    setloading(false);
  }


  return (
    <div className='text-3xl'>
      <button onClick={datas}>Get Data</button>
      {loading?<h2>Loading...</h2>:data.map((post)=>(<div key={post.id}>{post.title}</div>))}

    </div>
  )
}

export default page