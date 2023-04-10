const Paciente = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}

                <span className='font-normal normal-case'>Samsagaz</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}

                <span className='font-normal normal-case'>Isaac</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}

                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}

                <span className='font-normal normal-case'>10 de diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}

                <span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Vero, optio? Labore beatae, aperiam, quibusdam, dolore optio
                    recusandae sint pariatur minima mollitia qui architecto quis quasi voluptates! Quos
                    voluptatibus quae quo.</span>
            </p>
        </div>
    )
}

export default Paciente