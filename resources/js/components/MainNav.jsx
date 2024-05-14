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

   useEffect(() => {
    const handleClick = (event) => {
            const dropdownMenu = event.currentTarget.nextElementSibling;

            if(dropdownMenu) {
                dropdownMenu.classList.toggle('show');
            }
        };
        
        const dropdownToggleElements = document.querySelectorAll('.nav-link.dropdown-toggle');

        dropdownToggleElements.forEach((element) => {
            element.addEventListener('click', handleClick);
        })

    return () => {
        dropdownToggleElements.forEach((element) => {
            element.removeEventListener('click', handleClick);
        })
    }
   }, [])




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
                        <Link className="nav-link" href='/'>
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" href="/#team">
                           Team
                        </Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" href="/#aanbod">
                           Aanbod
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/#TKE">
                          The Katan experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#lessenrooster">
                           Lessenrooster
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/#news">
                           Laatste nieuws
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#contact">
                           Contact
                        </Link>
                    </li>
                   <li className="nav-item login dropdown">
                        <div className="nav-link dropdown-toggle nav-login" href="#" role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i className="fa-solid fa-user" />
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" href="/profile">Profiel</Link>
                          <Link className="dropdown-item" href="/logout">Uitloggen</Link>
                      </div>
                    </li>
                 </ul>
                </div>
              </div>
             </div>
         </nav>
       </>
     )
}