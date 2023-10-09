import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from './Navbar';

export default function Test() {
    const [data,SetData] = useState([]);


    useEffect(() => {
        fetch("https://api.sampleapis.com/switch/games")
        .then(res => res.json())
        .then(data => SetData(data));
    },[])
    

    console.log(data);

  return (
    <>
    <div className='main'>
        <table>
            <tr>
                <th>name</th>
                <th>release</th>
            </tr>
        {data.map((info) => (
                <tr>
                    <td>{info.name}</td>
                    <td>{info.releaseDates.Europe}</td>
                </tr>
            ))}
        </table>
    </div>
    <Navbar></Navbar>
    </>
    
    
  )
}
