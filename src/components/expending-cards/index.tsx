import React from 'react'
import './index.css'

const cards:Array<{url:string,title:string}> = [
    {
        url:'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title:'Explore The World'
    },
    {
        url:'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title:'Wild Forest'
    },
    {   
        url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
        title:'Sunny Beach'
    },
    {
        url:'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        title:'City on Winter'
    }
]

const ExpendingCards = ()=>{

    const [selected , setSelected] = React.useState<number>(0)

    return <div className='container'>
        {
            cards.map((item ,key) =>{
                return <div key={key} className={key === selected ? 'active panel' : 'panel'} style={{backgroundImage:`url(${item.url})`}} onClick={()=>{
                    setSelected(key)
                }}>
                    <h3>{item.title}</h3>
                </div>
            })
        }
    </div>
}

export default ExpendingCards