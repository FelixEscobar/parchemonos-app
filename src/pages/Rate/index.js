import React, { useState } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'

export const Rate = () => {

    const [stars, setStars] = useState(0)
    const size = "32px"

    const StarEmpty = ({size, idStar}) => (
        <ion-icon onClick={() => setStars(idStar) style={{fontSize:}} name="star-outline"></ion-icon>
    )

    const StarFill = ({size}, idStar) => (
        <ion-icon onClick={() => setStars(idStar)} style={{fontSize:}} name="star"></ion-icon>
    )


    return (
    <Page>
        <h3>Formulario de calificación de la experiencia</h3>
        <br />
        <div>
        <section className="score">
            <div>
            {
               [1,2,3,4,5].map((el, key) => el <= stars ? <StarFill key={key} size={ size } idStar={el} /> : <StarEmpty key={key} size={ size } idStar={el} /> )
            }          
           </div>
        </section>
        <textarea name="CommentExperience" rows="10" cols="50" onChange={e.target.value)}>Comenta tu experiencia={ e => setComments(e.target.value) } ></textarea>
        <Button disabled={!isValidForm} label="Calificar" type="submit"/>
        </div>
    </Page>
    )
}