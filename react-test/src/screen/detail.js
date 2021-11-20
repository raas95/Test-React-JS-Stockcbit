import React,{useState,useEffect}  from 'react'
import { detailContext } from '../model/store';
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const Detail=()=> {
    const {detailStore} =detailContext()
    const [isMobile, setIsMobile] = useState(false)
     //choose the screen size 
const handleResize = () => {
 
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])
  return (
    <div>
        <div style={{ }} >
        <img style={{marginTop:100, display: 'block',marginLeft: 'auto',marginRight: 'auto', width:isMobile?'70%':'20%'}}  src={`${detailStore?.Poster}`}   alt="logo" />
            <div >
            <h1 style={{textAlign: 'center'}}>{detailStore?.Title}</h1>
            <h1 style={{textAlign: 'center'}}>{detailStore?.Type}</h1> 
            <h1 style={{textAlign: 'center'}}>{detailStore?.Year}</h1>   
            </div>
        </div>
    </div>
  );
}
 

export default Detail;
