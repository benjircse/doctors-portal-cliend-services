import React from 'react';
import footer from '../assets/images/footer.png'
const Footer = () => {
    return (

        <div style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='mb-5  '>
            <footer  className=" m-10  p-10 bg-base-500  text-base-content ">
                <div  className='footer'>
                    <div>
                        <span  className="footer-title">Services</span>
                        <a  className="link link-hover">Branding</a>
                        <a  className="link link-hover">Design</a>
                        <a  className="link link-hover">Marketing</a>
                        <a   className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span  className="footer-title">Company</span>
                        <a  className="link link-hover">About us</a>
                        <a  className="link link-hover">Contact</a>
                        <a  className="link link-hover">Jobs</a>
                        <a  className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span  className="footer-title">Legal</span>
                        <a  className="link link-hover">Terms of use</a>
                        <a  className="link link-hover">Privacy policy</a>
                        <a  className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div  className='py-5 text-center text-primary'>
                    <p>Copyright © 2023 - All Rights Reserved</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;