import React,{useState,useEffect} from 'react';
import './Gallary.css'
import Page from './Page.js'


const Gallary = () => {
    const [list,setList] = useState([])
    
    useEffect(() =>{
        var url = "https://gallary-app.herokuapp.com/img/gallary/?page=1";
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.response);
                setList(JSON.parse(xhr.response))
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    },[])

    const nextPage = () =>{
        var url = list.next;
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.response);
                setList(JSON.parse(xhr.response))
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    }

    const prevPage = () =>{
        var url = list.previous;
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.response);
                setList(JSON.parse(xhr.response))
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    }

    return(
        Object.keys(list).length!=0?<div id = 'gallary' className="dash">
            <div id="shiftleft">
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div> 
        <Page props = {list.results} />
        </div> : <div className="dash"> 
        <h3>Loading images....</h3> 
        </div>
           
        
    )
}

export default Gallary;