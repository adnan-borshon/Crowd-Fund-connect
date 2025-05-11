import React from 'react';
import { useNews } from '../Context/NewsContext.jsx';

function News() {
const {news, loading} = useNews();

if(loading) {
  return <p className='p-4 bg-black text-white '>Loading News...</p>
}
  return (
   <section className='overflow-hidden mx-5'>
<h1 className="my-10 text-4xl mx- font-extrabold color">Latest News</h1>
<div className="container w-full grid grid-cols-1">
  { news.map((item)=> (
    <div key={item.id} className='my-6 space-y-4 flex flex-col justify-start items-start'>
      <h1 className='h2'>{item.title}</h1>
      <p className='date p1'>{item.date}</p>
      <p className=' text-lg p1'>{item.description}</p>
    </div> 
    ))}
  </div>  
   </section>
  );
}

export default News;