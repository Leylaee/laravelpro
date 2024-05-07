export default function MainNav(){
    return (
        <>
          <nav className="nav navbar navbar-expand-lg navbar-dark backg-color-2 padding-left-150 padding-right-50">
              <div className="container-fluid d-flex container-m">
                  <div className="logo">
                     <img
                         src="images/dansstudio-katan-logo.png"
                         alt="Logo Dansstudio Katan"
                    />
                  </div>
                  <button
                        className="navbar-toggler "
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
                  <ul className="navbar-nav flex-grow-1 pe-3 justify-end">
                     <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
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
                        <a className="nav-link nav-login" href="#">
                           <i className="fa-solid fa-user" />
                        </a>
                    </li>
                 </ul>
                </div>
              </div>
             </div>
         </nav>
       </>
     )
}