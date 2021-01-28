import React from 'react'
import data from '../../data/bodyPartDatabase'


function Body (prop) { 
    const bodyPartNames = Object.keys(data)


    return (
        <div>
            <ul>
                    {bodyPartNames.map(bodyPart => {
                        return (
                            <li>
                                {bodyPart}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
};

export default Body