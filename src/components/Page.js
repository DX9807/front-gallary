import React from 'react';
import './Page.css'
import {Link} from 'react-router-dom';
import View from './View';

const Page = (props) =>{
    props =Object.values(props)[0]

    return(
        <div className="images">
            {
                props.map((img,i) => {
                    
                    const path = img.img;
                    return(
                      <div id = {img.id} className="single">
                            <Link to={`/view/${img.id}`}>
                                <img  src={path} alt="img" height='250' width='350'/>
                            </Link>
                      </div> 
                    )
                })
            }
        </div>
    )
}


export default Page;