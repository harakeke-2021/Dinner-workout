import React, {useState} from 'react'
import data from '../../data/bodyPartDatabase'
import { Link } from 'react-router-dom'



function Body (prop) { 
    const bodyPartNames = Object.keys(data)

    let img = "./images/blank.png"

    const [image, changeImage] = useState(img)

    function handleImage (part) {
        console.log(part)
        changeImage(`./images/${part}.png`)
        

    }

    


    return (
        <div>
            <ul>
                    {bodyPartNames.map(bodyPart => {
                        return (
                        
                                <li key={bodyPart} onMouseEnter={ () => handleImage(bodyPart)}>
                                    <Link to={`/${bodyPart}`} >{bodyPart}</Link>
                                </li>
                            
                        )
                    })}
            </ul>
            <img src={image} />
        </div>
    )
};

export default Body