import React from 'react'
import { Link } from 'react-router-dom'
import body from '../../data/bodyPartDatabase'


function BodyPart (props) {
    const bodyPart = props.match.params.bodyPart
    const workouts = body[bodyPart]

    console.log(workouts)
    return (
        <>
            <ul>
                {
                    workouts.map(workout => {
                        return(
                            <>
                              <li key={workout.id}>
                                  <Link to={`/${bodyPart}/${workout.name}`}>{workout.name}</Link>
                              </li>

                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default BodyPart