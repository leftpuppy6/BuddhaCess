import { useEffect, useState } from "react";
import useSWR from 'swr'
import axios from 'axios'




export function App() {
    const [title, setTitle] = useState('')
    
    const onChange = (e: any) => {
        setTitle(() => e.target.value)
    }

    // const {data,mutate} = useSWR('http://localhost:3001/todos')

    const[data,setData] = useState<any>([])
    useEffect(() => {
        axios.get('http://localhost:3001/todos')
        .then((response) => {
            const result = response.data
            setData(result)
        })
    },[])

 function onClick(){
        axios.post('http://localhost:3001/todos',{isDone : false,title})
        .then( (response) => {
            setTitle(() => "")
        })
        .catch( (error) => {
            console.log(error)
        })

    }

  function onDelete(id: number){
            axios.delete('http://localhost:3001/todos/' + id)
            .catch( (error) => {
            console.log(error)
        })
 
        }
    
 async function onFinish(id: number){
        const isDone = data[id - 1].isDone?false:true
       await axios.patch('http://localhost:3001/todos/' + id,{isDone})
        
       await axios.get('http://localhost:3001/todos')
        .then((response) => {
            const result = response.data
            setData(result)
        })

    }

    if(!data){
        return(
            <div>
                <p>data is not found</p>
            </div>
        )
    }

    return( 
        <div>
            {data.map((datum: any) => (
                <div key={datum.id} onClick={() => onFinish(datum.id)}><button onClick={() => onDelete(datum.id)}>{datum.id}</button> : <span style={{textDecoration:datum.isDone?"line-through":""}}>{datum.title}</span></div>
            ))}
         
            <input type='text' value={title} onChange={onChange}></input>
            <button onClick={() => onClick()}>Smoke weed</button>
        </div>
  );
}
