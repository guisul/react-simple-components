
import React from 'react'
import './index.css'

export default function ScrollAnimation(){
    const [showLeng,setShowLeng] = React.useState<number>(0)

    React.useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const triggerBottom = window.innerHeight / 5 * 4
            
        })
    },[])

    return <>
    <h1>Scroll to see the animation</h1>
    {
        (()=>{
            for(let i = 0 ; i < 13;i++){
                return <div className="box"><h2>Content</h2></div>
            }
        })()
    }
    </>
}