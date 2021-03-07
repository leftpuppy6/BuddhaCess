import { useEffect, useState } from "react";



export function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        window.alert("Count value has been changed.")
    },[count])
    return( 
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
  );
}
