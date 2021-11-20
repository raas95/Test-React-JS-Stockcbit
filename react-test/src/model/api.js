// import { useState } from 'react'
// import axios from 'axios'

// export const handlerGetData =  (val,page,oldData) => { 
 
//     oldData = (oldData||[])  
//     page = (page||1)  
//     val = (val||'Batman')  
//     let dataConcat = []    
//     const res =  axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${val}&page=${page}`)
//     .then(function (res) {
//       // handle success
         
//        let aaa = oldData.concat(res?.data?.Search);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
     
   
//     // 
//     return dataConcat
//   }