import React from 'react'
import LogoFacebook from './facebook-logo-black.webp';
import './Footer.css';
import LogoInstagram from './instagram.png';

const Footer = () => {
    return (
        <footer className='footerLogos  text-light'>
            <div className='parrafo'>
                <p>  maquinas opticas</p>
                <p>salon de venta:  argentina</p>
                <p>tel ****anota</p>
            </div>
            <div className='linksFooter'>
                <a href='https://www.facebook.com' className='btn btn-primary bg-light logo'>
                    <img src={LogoFacebook} className='logoFk' alt='ir a facebook'/>
                </a>
                <a href='https://www.instagram.com/' className='btn btn-primary bg-light logo'>
                    <img src={LogoInstagram} className='logoIg' alt='ir a instagram' />

                </a>

            </div>
            <p> by . . . GNQ devops</p>
         
        </footer >
    )
}

export default Footer;