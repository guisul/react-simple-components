
import React from 'react'
import './index.css'
export default function HiddenSearchWidget(){
    const [active,setActive] = React.useState<boolean>(false)

    return <div className={active ? 'search active' : 'search'}>
    <input type="text" className="input" placeholder="Search..." />
    <button className="btn" onClick={()=>{
        setActive(!active)
    }}>
      <i className="fas fa-search"></i>
    </button>
  </div>
}

