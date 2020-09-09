import React from 'react'
import { Adventure } from './Adventure'

const adventures = [
    {
        imagen: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
        nombreAventura: 'Senderimo por Envigado',
        lugar: 'Envigado',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
        nombreAventura: 'Escala las montañas del oriente',
        lugar: 'San Carlos',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
        nombreAventura: 'Mirador de palmas',
        lugar: 'Medellín',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
        nombreAventura: 'Kayak en corrientes rapidas',
        lugar: 'San Rafael',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/US-597853_4722_R.jpg',
        nombreAventura: 'Senderimo por Envigado',
        lugar: 'Envigado',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://www.justcheckin.com.mx/wp-content/uploads/2018/10/escalada-actividad-aventura-turismo-aventuras-empresas-exploramas-1.jpg',
        nombreAventura: 'Escala las montañas del oriente',
        lugar: 'San Carlos',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://noticiasleticia.co/wp-content/uploads/2020/07/img_79e2f081fb4234c8bbd92fe2e3de33ca.jpg',
        nombreAventura: 'Mirador de palmas',
        lugar: 'Medellín',
        precio: 'COP $299',
        calificacion: '*****'
    },
    {
        imagen: 'https://elpais.com/elpais/imagenes/2019/03/01/viajero_astuto/1551460921_336112_1551693736_noticia_grande.jpg',
        nombreAventura: 'Kayak en corrientes rapidas',
        lugar: 'San Rafael',
        precio: 'COP $299',
        calificacion: '*****'
    }
]

export const Experiences = () => (
    <section>
        {
        adventures.map(item => <Adventure { ...item } /> )
        }
    </section>
)