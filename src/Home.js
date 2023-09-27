import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Home() {

    const [Demo1, setDemo1] = useState("test paragraph");
    const [Demo2, setDemo2] = useState("A Paragraph");

    function HandleClick() {
        setDemo1("Paragraph changed.");
        setDemo2("Paragraph changed.");
    }


    return (
        <>
            <div className='main'>
                <div className='box'>
                    <p>{Demo1}</p>
                    <p>{Demo2}</p>
                    <div className='container'>
                        <button onClick={HandleClick}>Try it</button>
                    </div>

                </div>
            </div>
            <Navbar></Navbar>
        </>

    )
}
