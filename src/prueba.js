import React from 'react';

import "./index.css"

function Prueba(props){
    return(
        <main>
            <div className="card">
                <img className="contenido" src={props.imagenUrl} alt='planta'/>
                    <p className="nombre">{props.nombre}</p>
                    <p className="edad"> {props.cumpleaños}</p>
            </div>
        </main>
    )
}

const CAP = [
    
    {nombre:"Marck",
    cumpleaños: "30 años",
    imagenUrl:"https://image.freepik.com/foto-gratis/varon-joven-mirando-camiseta-rosa-mirando-alegre-vista-frontal_176474-84436.jpg"
},

{ 
    nombre:"Carla",
    imagenUrl:"https://image.freepik.com/foto-gratis/mujer-hermosa-joven-que-invita-venir-traje-casual-que-parece-segura-vista-frontal_176474-108755.jpg",
    cumpleaños: "25 años",
},

{ 
    nombre:"Juan carlos",
    imagenUrl:"https://image.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg",
    cumpleaños: "32 años",

},

{ 
    nombre:"Lucia",
    imagenUrl:"https://image.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg",
    cumpleaños: "28 años",
},

{ 
    nombre:"Silvia",
    imagenUrl:"https://image.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg",
    cumpleaños: "40 años",
}     
]

function Lista(datos){
    return(
        <>
        {datos.array.map((planta)=>{
            const {nombre, imagenUrl,id,cumpleaños}= planta;
            return(
                <Prueba nombre={nombre} imagenUrl=
                {imagenUrl} key={id} cumpleaños={cumpleaños}/>
            )
            
         })}    
    
        </>
    )
}

export default function App(){
    return(
        <Lista array={CAP}/>
    )
}
