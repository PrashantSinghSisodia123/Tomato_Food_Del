import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
<div className="app-download-text-area">
<h1 className="app-download-txt1">For Better Experience Download</h1><br />
<h1 className="app-download-txt2">Tomato App</h1>
</div>
<div className="app-download-btn-area">
<img src={assets.play_store}alt="" className="app-download-google-play-btn" />
<img src={assets.app_store} alt="" className="app-download-app-store-btn" />
</div>
    </div>
  )
}

export default AppDownload