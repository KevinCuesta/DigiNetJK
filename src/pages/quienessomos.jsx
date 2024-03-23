/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";

const QuienesSomos = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xl text-accent tracking-widest font-medium title-font mb-1">DigiNet JK</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-tertiary">Creando Soluciones Digitales a Medida</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-tertiary ">DigiNet JK es una empresa joven y vibrante con sede en Neiva, Colombia. Nos apasiona crear soluciones digitales innovadoras que ayuden a nuestros clientes a alcanzar sus objetivos.</p>
    </div>
    <div className="flex flex-wrap mx-auto">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 mx-auto">
        <h2 className="text-lg sm:text-xl text-accent font-medium title-font mb-2">Nuestra Misión</h2>
        <p className="leading-relaxed text-tertiary mb-4">Ser la empresa referente en soluciones tecnológicas integrales, satisfaciendo las necesidades de nuestros clientes a través de una oferta completa de hardware, software y servicios de mantenimiento de alta calidad.</p>
        <a className="text-gray-500 inline-flex items-center sm:italic">DigiNet JK
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 mx-auto">
        <h2 className="text-lg sm:text-xl text-accent font-medium title-font mb-2">Nuestra Visión</h2>
        <p className="leading-relaxed text-tertiary mb-4">Ser la empresa tecnológica de referencia en Latinoamérica, reconocida por su excelencia en el servicio, su compromiso con la innovación y su contribución al desarrollo de la sociedad.</p>
        <a className="text-gray-500 inline-flex items-center sm:italic">DigiNet JK
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 mx-auto ">
        <h2 className="text-lg sm:text-xl text-accent font-medium title-font mb-2">Nuestros Razón</h2>
        <p className="leading-relaxed text-tertiary mb-4">Nuestra razón de ser es contribuir al desarrollo tecnológico de la sociedad, impulsando el progreso y el bienestar a través de soluciones innovadoras y de alta calidad que potencien el potencial de las personas y las empresas.</p>
        <a className="text-gray-500 inline-flex items-center sm:italic">DigiNet JK
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-primary bg-fiveting border-0 py-2 px-8 focus:outline-none hover:bg-sixting rounded text-lg"> 
    <NavLink to='/contactanos'>Contactanos</NavLink>
    </button>
  </div>
</section>
  )
}

export default QuienesSomos