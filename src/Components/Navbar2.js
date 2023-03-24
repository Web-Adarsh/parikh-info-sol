import React from 'react'

export default function Navbar2() {
    return (
        <>
            <nav style={{backgroundColor:"#0d2366"}} className="navbar " >
                <div  className="container-fluid">
                    <a className="navbar-brand" href="#" style={{border:"2px solid green",display:"flex"}}>
                       <div  style={{backgroundColor:"#0d2366",border:"2px solid green"}} > <img src="https://parikhinfosolutions.com/wp-content/uploads/2023/01/logo-desktop.webp" alt="Logo" width="40" height="45" class="d-inline-block align-text-top"/></div>
                       <div style={{backgroundColor:"#0d2366",color:"white"}} >
                            <div>Parikh info Solution Pvt. Ltd. </div>
                            <div style={{fontSize:"0.8rem"}}>Localization & Globalization Experts</div>
                       </div>
                    </a>
                </div>
            </nav>
        </>
    )
}
