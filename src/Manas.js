import React from 'react';
import './Manas.css';
function Manas(){
    return(
        <div className= 'Loginpage'>
            <div className='Bg1'>
                <img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670656147/227354_itb0zm.jpg"> </img>
            </div>
            <div className='magesh'>
            <img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670662870/92471_sfixfr.png" height={500} width={600}></img>
            </div>
            <div className='Quote1'>
                <p className='Q1'><b>"Some beautiful paths<br></br>can’t be discovered without<br></br>getting lost..."</b></p>
            </div>
           {/*} <div className='Quote2'>
                <p className='Q2'><b>PROJECT : ACE ADVENTURES</b></p>
            </div>
            <div className='Quote3'>
                <p className='Q3'><b>TRAVEL ORGANIZATION AGENCY</b></p>
    </div>*/}
            <div className='Quote4'>
                <p className='Q4'><b>Login to your Account</b></p>
            </div>
            <p className='Align1'>E-mail ID   :</p>
            <input className='Align2' type="text" placeholder="Enter E-mail ID" />
            <p className='Align3'>Password   :</p>
            <input className='Align4' type="text" placeholder="Enter password" />
            <button className='Align5'>Sign In</button>
            <button className='Align6'><img src="https://res.cloudinary.com/dhfisy92t/image/upload/v1670663907/image8-2_dklgit.webp" height={23} width={55}></img>Sign up with Google</button>
            <p className='Align7'>Don't have an account?... Create one</p>
            <button className='Align8'>Create Account</button>
            {/*<div className='Quote5'>
                <img className='Logo' src="https://res.cloudinary.com/dc8kig0rh/image/upload/v1670664258/Screenshot_20221125_215122-removebg-preview_qsizoz.png" height={80} width={80}></img>
                <p className='Logo'><b>ACE ADVENTURES</b></p>;
    </div>*/}
        </div>
    )
}
export default Manas; 
