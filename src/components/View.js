import React,{useState,useEffect} from 'react';
import './View.css';
import {useParams,Link} from 'react-router-dom';


const View = () => {
    const [image,setImage] = useState([])
    const id = useParams()
    console.log(id)
    useEffect(() =>{
        var url = 'https://gallary-app.herokuapp.com/img/detail/'+id.id
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.statusText,xhr.response)
                setImage(JSON.parse(xhr.response))
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    },[])

    const rotateLeft = () =>{
        var url = 'https://gallary-app.herokuapp.com/img/rotateleft/'+id.id
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.statusText,xhr.response)
                setImage(JSON.parse(xhr.response))
                window.location.reload()
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    }

    const rotateRight = () =>{
        var url = 'https://gallary-app.herokuapp.com/img/rotateright/'+id.id
        const method = 'GET';
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                console.log(xhr.statusText,xhr.response)
                setImage(JSON.parse(xhr.response))
                window.location.reload()
            }  
        }
        xhr.open(method,url,true);
        xhr.send()
    }

    
    const path = image.img;
    return (
        <div className="viewImage">
        <div id="shiftleft"><Link to='/'><button>Back</button></Link></div> 
        <div id="shiftright">
                <button onClick={rotateLeft}>left</button>
                <button onClick={rotateRight}>right</button>
            </div>  
        <img src={path} height="600" width="800"></img>           
        </div>
            )
}

export default View;