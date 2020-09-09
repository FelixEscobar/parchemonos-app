import React from 'react'
import { Header } from './../../../components/Header'
import { Score } from './../../../components/Score'

export const Adventure = ({imagen, nombreAventura, lugar, precio, calificacion}) => (
    <div className="Adventure-container">
        <img src={imagen} className="Adventure-image"/>
        <article className="Adventure-data">
            <Header title={nombreAventura} />
            <h2><small>{lugar}</small></h2>
            <h2><small>{precio}</small></h2>
            <Score stars={3} users="120" size="12px" />
        </article>
    </div>
)