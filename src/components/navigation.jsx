import logo from "./brutalista-logo-pagina-web-negro.png";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          <img src={logo} alt="logo" id="logo"  />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Portafolio

              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>

                Proyectos

              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
              Tendencias

              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
              Nosotros

              </a>
            </li>
           
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contacto
              </a>
            </li>
             <li>
              <a href='#fdf' className='page-scroll'>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
