import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([]);
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=> response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div >Github followers:{data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}