import React,{useEffect,useState} from 'react'
 
import './App.css';
import axios from 'axios' 
const App=()=> {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData =  (val,page,oldData)=>{
    oldData = (oldData||[])  
    page = (page||1)  
    val = (val||'Batman')  
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${val}&page=${page}`)
    .then(function (res) {
      // handle success
      let respon = oldData.concat(res?.data?.Search);
      console.log({respon})
      setData(respon)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
     
  }
  return (
    <div    >
  
        {data.map((item) =>(
          <div style={{ width: 300,transition: '0.3s',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
          {/* <div style={{}}> */}
          <img src={`${item?.Poster}`} width='300'  alt="logo" />
   
 
         <p>{item?.Title}</p>
        </div>
        
        
        ))
        }
       
     
    </div>
  );
}

export default App;
