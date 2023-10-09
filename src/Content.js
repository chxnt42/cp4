import React from 'react'
import Navbar from './Navbar'

export default function Content() {
    return (
        <>
            
            <footer>
                <table>
                    <tr>
                        <th>Navigation</th>
                        <th>Contact Details</th>
                        <th>Copyright</th>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td>Email: *email*</td>
                        <td>This page is copyright to...</td>
                    </tr>
                    <tr>
                        <td>Page2</td>
                        <td>Reviews/Discussion Page</td>
                        <td>continue copyright...</td>
                    </tr>
                </table>

            </footer>

            <Navbar></Navbar>
        </>

    )
}
