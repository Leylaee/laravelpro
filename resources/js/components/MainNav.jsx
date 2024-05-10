import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function MainNav(){
   const [isSticking, setIsSticking] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
       const primaryHeader = document.querySelector('.primary-header');
       const scrollPosition = window.scrollY;

       if (scrollPosition > 0 ) {
           setIsSticking(true);
       } else {
           setIsSticking(false);
       }
    }

       window.addEventListener('scroll' ,handleScroll);

       return () => {
        window.removeEventListener('scroll',handleScroll);
       };
   }, []);




    return (
        <>
          <nav className={`nav navbar navbar-expand-lg  backg-color-2 primary-header ${isSticking ? 'sticking' : '' }`}>
              <div className="container-fluid d-flex container-m">
                 <div className="logo">
                     <img
                         src="../../images/dansstudio-katan-logo.png"
                         alt="Logo Dansstudio Katan"
                    />
                  </div>
                  <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                   >
                        <span className="navbar-toggler-icon" />
                  </button>
                  <div
                      className="offcanvas offcanvas-end bg-black "
                      tabIndex={-1}
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                  >
                  <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                       Menu
                  </h5>
                  <button
                       type="button"
                       className="btn-close btn-close-white"
                       data-bs-dismiss="offcanvas"
                       aria-label="Close"
                  />
              </div>
              <div className="offcanvas-body">
                  <ul className="navbar-nav flex-grow-1 padding-left-200 justify-f-center align-center">
                     <li className="nav-item">
                        <a className="nav-link" href='#home'>
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#team">
                           Team
                        </a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#aanbod">
                           Aanbod
                         </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#TKE">
                          The Katan experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#lessenrooster">
                           Lessenrooster
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                           Laatste nieuws
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                           Contact
                        </a>
                    </li>
                   <li className="nav-item login">
                        <Link className="nav-link nav-login" href="/login">
                           <i className="fa-solid fa-user" />
                        </Link>
                    </li>
                 </ul>
                </div>
              </div>
             </div>
         </nav>
       </>
     )
}