import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({movieList}) => {
    const params = useParams()
    console.log(params)
    const movieDesc = movieList.find(el => el.Id === +params.id)
return (
    <div>
    {movieDesc.description}
    {movieDesc.trailer}
    </div>
)
}

export default Description
