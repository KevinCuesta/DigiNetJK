/* eslint-disable react/no-unknown-property */

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const btnLink = 'ease-in duration-300 text-xl block inline-block py-1 text-white hover:text-accent cursor-pointer mr-8'
  const activeLink = ' ease-in duration-300 text-2xl block inline-blocl py-1 text-accent mr-8'
  return (
<header className=" shadow-[0_20px_35px_#ffffff45] text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='/src/assets/img/Logo_DigiNetJK.png' width='80'/>
      <span className="ml-3 text-xl font-semibold text-white">DigiNet JK</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to='/'className={({isActive}) => isActive?activeLink:btnLink}>Inicio</NavLink>
      <NavLink to='/quienessomos' className={({isActive}) => isActive?activeLink:btnLink}>¿Quienes Somos?</NavLink>
      <NavLink to='/valores' className={({isActive}) => isActive?activeLink:btnLink}>Valores</NavLink>
      <NavLink to='/imagenes' className={({isActive}) => isActive?activeLink:btnLink}>Imagenes</NavLink>
      <NavLink to='/contactanos' className={({isActive}) => isActive?activeLink:btnLink}>Contactanos</NavLink>

    </nav>

  </div>
</header>
  )
}

export default Navbar;