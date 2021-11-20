import React,{useRef,useEffect,useState} from 'react'
import Modal from 'react-modal';
import { useNavigate   } from 'react-router-dom';
import axios from 'axios' 
import Select from 'react-select'
import { ImCross } from 'react-icons/im';
import { detailContext } from '../model/store';
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const Home=(props)=> {
    const navigate = useNavigate();
    const { setDetailStore} =detailContext()
  const listInnerRef = useRef();
  const [image,setImage] = useState('')
  const [data,setData]=useState([])
  const [isOpen, setIsOpen] =  useState(false);
  const [paging,setPaging] = useState(0)
  const [search,setSearch] = useState(null)
  const [searchData,setSearchData] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    console.log({search})
    getData(search,1,[])
   
   setOption(search)
  },[search])
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
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        let page = paging+1
        setPaging(page)
        getData(search,page,data)
        console.log('Reached bottom')
      }
    }
  };
   
  const getData =  (val,page,oldData)=>{
    
    oldData = (oldData||[])  
    page = (page||1)  
    val = (val||'Batman')  
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${val}&page=${page}`)
    .then(function (res) {
      // handle success
       
      let respon = oldData.concat(res?.data?.Search);
     
      setData(respon)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
     
  }
  const setOption =  (val)=>{
    
 
    val = (val||'Batman')  
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${val}`)
    .then(function (res) {
      // handle success
      let array = []
      let respon = res?.data?.Search;
      respon.map((item,index) =>(
          array.push({value:item.Title,label:item.Title})
      )) 
      console.log({array,respon})
      setSearchData(array)
   
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
     
  }
  return (
    <  >
      <div style={{margin:50}}>
      <h1 style={{textAlign: 'center'}}>Big Movies</h1>
        <Select options={searchData} onChange={(v)=>setSearch(v.value)} onInputChange={(v)=>setOption(v)} />
      </div>
        <div 
        onScroll={() => onScroll()} ref={listInnerRef}
         style={{ overflowY: 'scroll',height:1000 ,display:'grid', gridTemplateColumns: `repeat(${isMobile?1:5}, minmax(0, 1fr))`}}>
        {data.map((item,index) =>(
          <div  key={index} style={{ margin:40,width: 300,transition: '0.3s',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
          {/* <div style={{}}> */}
          <img onClick={()=>{setIsOpen(!isOpen);setImage(item?.Poster)}} src={`${item?.Poster}`} width='300'  alt="logo" />
          
          <div onClick={()=>{navigate('/detail');setDetailStore(item)}} style={{margin:10}}>
          <tr>
            <td><b>Title</b></td>
            <td>:</td>
            <td>{item?.Title}</td>
            {/* <td>Germany</td> */}
          </tr>
          <tr>
            <td><b>Year</b></td>
            <td>:</td>
            <td>{item?.Year}</td>
            {/* <td>Germany</td> */}
          </tr>
          <tr>
            <td><b>Type</b></td>
            <td>:</td>
            <td>{item?.Type}</td>
            {/* <td>Germany</td> */}
          </tr>
          </div>
        
        </div>
        
        
        ))
        }
       </div>
       <Modal 
           isOpen={isOpen}
           contentLabel="Minimal Modal Example"
           style={customStyles}
        >
        <ImCross onClick={()=>setIsOpen(false)} style={{marginBottom:10}} />
         <br/>
          <img src={`${image}`} width='400'    alt="logo" />
        </Modal>
    </>
  );
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default (Home);
