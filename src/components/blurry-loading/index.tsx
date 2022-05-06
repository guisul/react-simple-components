import React from 'react'
import './index.css'
export default function BlurryLoading(){
    const [count,setCount] = React.useState<number>(0);

    React.useEffect(()=>{
        if(count > 99){
            return;
        }
        const interval = setInterval(()=>{
            setCount(count + 1)
        },50)

        return ()=>{ clearInterval(interval) }
    },[count])
    return <>
         <section className="bg"></section>
    <div className="loading-text">{count}%</div>
    </>
}