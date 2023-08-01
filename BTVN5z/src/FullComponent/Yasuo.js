import React from 'react'

export default function Yasuo() {
  return (
    <>
        <div className='home'>
                <div className='noname'>
                    <img src={require('./p1.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Ha Noi</h3>
                        <p className='colort'>Fri 28 Nov 2021</p>
                        <p>Ha Noi faith and hope. We always waiting for you!</p>
                        <br></br> <br></br> <br></br>
                        <button className='nolike'>Buy Tickets</button>
                        <button className='nolikes'>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className='noname'>
                    <img src={require('./p2.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Ho Chi Minh City</h3>
                        <p className='colort'>Tue 28 Dec 2021</p>
                        <p>HCM City active and modernization. We always waiting for you!</p>
                        <br></br> <br></br>
                        <button className='nolike'>Buy Tickets</button>
                        <button className='nolikes'>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className='noname'>
                    <img src={require('./p3.jpg')} className='imager' alt='...' />
                    <div className='nolife'>
                        <h3>Da Nang</h3>
                        <p className='colort'>Thu 28 Nov 2021</p>
                        <p>Da Nang has regional stature. We always waiting for you!</p>
                        <br></br> <br></br>
                        <button className='nolike'>Buy Tickets</button>
                        <button className='nolikes'>Get free</button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br />
                <br />
            </div>
    </>
  )
}
