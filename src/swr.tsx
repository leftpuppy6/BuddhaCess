import { useEffect, useState } from "react";
import useSWR from 'swr'


export function App() {
    const {data} = useSWR('https://jsonplaceholder.typicode.com/todos/1')
    if(!data){
        return(
            <div>
                <p>data is not found</p>
            </div>
        )
    }
    return( 
        <div>
            <p>{data.title}</p>
        </div>
  );
}
