import React from 'react'
import './index.css'

const steps = [1,2,3,4]

export default function ProgressSteps(){
    const [progress,setProgress] = React.useState<number>(0)
    
    const handleClick = (derc:'prev' | 'next') =>{
        if((progress === 0 && derc === 'prev') || (progress === steps.length -1 && derc === 'next')){
            return;
        }
        if(derc === 'prev'){
            setProgress(progress - 1);
            return;
        }
        setProgress(progress + 1);
    }
    return <div className="container">
        <div className="progress-container">
            <div className="progress" style={{width:`${progress / (steps.length - 1) * 100}%`}}></div>
            {
                steps.map((i,key)=>{
                    return <div key={key} className={progress >= key ? 'circle active' : "circle"}>{i}</div>
                })
            }
      </div>

      <button className="btn" onClick={()=>{handleClick('prev')}}>Prev</button>
      <button className="btn" onClick={()=>{handleClick('next')}}>{progress !== steps.length -1 ? 'Next' :'Done'}</button>
    </div>
}