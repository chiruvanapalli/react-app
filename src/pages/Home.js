import React, { useState } from 'react'
import {useAPI} from '../context/Context'
import Rating from './Rating';

const Home = () => {
const {state} = useAPI();
const [rate, setRate] = useState()



const onClick = (i) => {
  setRate(i+1)
}





console.log('data', state)
  
  return (
    <div>
      Home
        <Rating rating={rate} onClick={onClick} style={{cursor:"pointer"}} />
        <button>Show Data</button>
    </div>
  )
}

export default Home
