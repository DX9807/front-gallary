import React,{useState} from 'react';
import './Upload.css'

const Upload = () =>{
    const [item,setItem] = useState([])
    
    
    const uploadImage = (event) => {
        event.preventDefault()
        const form = document.getElementById('myform')
        const formData = new FormData(event.target)
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function (){
            if (this.readyState === 4 && this.status === 201){
                console.log(xhr.response)
                form.reset()
            }
        }
        xhr.open('POST',"https://gallary-app.herokuapp.com/img/",true)
        xhr.send(formData)
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setItem({
          [name]: value    });
      }


    return(
        <div className="upload">
            <form id='myform' method='post' action={`https://gallary-app.herokuapp.com/img/`} onSubmit={uploadImage} >
            Tag:    
            <select name="tags" id="tags">
            <option value="nature">Nature</option>
            <option value="screenshots">Screenshots</option>
            <option value="cars">Cars</option>
            <option value="sketch">Sketch</option>
            <option value="pets">Pets</option>
            <option value="wildlife">Wildlife</option>
            <option value="portrait">Portrait</option>
            <option value="sky">Sky</option>
            <option value="desert">Desert</option>
            <option value="general">General</option>
            </select>
            <input type = 'file'  name ='file' multiple='true' onChange={handleInputChange} />
            <input type = 'submit' name = 'submit' value = 'Submit'/>
            </form>
        </div>
    )
}

export default Upload;