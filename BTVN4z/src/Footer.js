import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div>
                    <h1>CONTACT</h1>
                    <p className='texts'>To interact! Drop a Note!</p>
                </div>
                <div className='abcd'>
                    <div className='post'>
                        <span className='city'>Hanoi, VN</span> <br />
                        <span className='phonez'>Phone: {+84}123456789</span> <br /> 
                        <span className='emailz'>Email: mail.@gmail.com</span> 
                    </div>
                    <div>
                        <input className='nameone' type='text' id='name' name='name' placeholder='Name'></input>
                        <input className='nameone' type='email' id='email' name='email' placeholder='Email'></input> <br />
                        <input className='nameones' type='text' id='name' name='name' placeholder='Message'></input> <br /> <br />
                        <button className='nametwo' type='submit'>SEND</button>
                    </div>
                </div> <br />
            </div>

        </>
    )
}
