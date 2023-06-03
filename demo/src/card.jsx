// import {useEffect............................................................................................................, useState}from "react";
// const Card=(Props)=>{
//     //const greeting='welcome';

//     const[name,setName]=useState('react')
//     const updateName=(value)=>{setName(value)
//     }
//     return(
//         <>
//         welcome
//         {name} {Props.name}<center>
//         <button onClick={()=>setName('js')}>name update
//         </button><br></br><br></br>
//         <button onClick={()=>updateName('java')}> update
//         </button><br></br><br></br></center>
//         </>
//     )
    
// }
// import axios from "axios"
// import { useState } from "react"
// const Card=(Props)=>{
// const[name,setName]=useState([])
// const GetData=async()=>{
//         const data=await axios.get('https://jsonplaceholder.typcode.com/')
//         console.log('data',data.data)
//         setName(data.data)
//     }
//     return(
//         <>
//         <h1> hi i am kalai</h1>
//         <button onClick={(getData())}>get data</button>
//         <p>{JSON.stringify(name)}
//         {
//         name.map(value=>{return<p>{value.title}</p>})
//         }
//         <input type="text" onChange={(e)=>console.log(e.target.value)}/>
//         </p>
//         </>

//     )

// }
// export default Card
import axios from "axios"
 import{useState} from "react"
 const Card=(props)=>{
    const[name,setName]=useState([])
    const GetData=async()=>{
        const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('data',data.data)
        setName(data.data)

    }
    return(
        <>
        <button onClick={()=>GetData()}>Get Data</button>
        {/*<p>{JSON.stringify(name)}</p>*/}
        {
            name.map((value)=>{return<p>{value.title}</p>})
        }
        <input type="text" onChange={(e)=>console.log(e.target.value)}/>
        </>
    )
 }
 export default Card