/* eslint-disable react/no-unknown-property */


const Inicio = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/src/assets/img/1200x500.jpg"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-white-300">
            <img src="/src/assets/img/kevin.png" class="w-full h-full object-cover rounded-full shadow-[0_10px_20px_#ff7b0045]" />
          </div>
          <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-white-300 shadow-[0_10px_20px_#ff7b0045]">
            <img src="/src/assets/img/julian.png" class="w-full h-full object-cover rounded-full " />
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg text-white">Kevin y Julian</h2>
            <div className="w-12 h-1 bg-accent rounded mt-2 mb-4"></div>
            <p className="text-base text-white">Kevin y Julián son dos jóvenes emprendedores que, impulsados por su pasión por la tecnología y su deseo de contribuir al desarrollo de su región.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4 text-white">DigiNet JK es una empresa joven y dinámica apasionada por empoderar a empresas y personas a través de soluciones tecnológicas integrales. Ofrecemos una gama completa de hardware, software y servicios de mantenimiento de alta calidad, todos impulsados por un compromiso con la satisfacción del cliente y una búsqueda incesante de innovación. Fundada por los estudiantes universitarios Kevin Cuesta y Julián Gutiérrez, DigiNet JK aspira a ser una fuerza líder en el panorama tecnológico de América Latina, dejando un impacto positivo a través de sus contribuciones al desarrollo social.</p>
          <a className="text-accent inline-flex items-center">DigiNet JK.
          </a>
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default Inicio;