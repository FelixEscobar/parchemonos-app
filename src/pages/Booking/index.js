import React, { useState, useEffect } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { useParams } from 'react-router-dom'
import { requestHttp } from './../../services/HttpServer'

export const Booking = () => {

  const { id } = useParams()
  const [bookingDate, setBookingDate] = useState('')
  const [comments, setComments] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)

  useEffect(() => {
    setIsValidForm(new Date(bookingDate) > new Date())
  }, [bookingDate])

  const bookingFormHandler = (e) => {
    e.preventDefault()
    const form = {
      booking_Date : bookingDate,
      comments // comments: comments
    }
    console.log('formulario a enviar', form)
    enviarFormulario(form)
  }

  const enviarFormulario = async(data) => {
    try {
      const response = await requestHttp('post', `bopking/$(id)`,data)
      console.log('booking', response.booking)
      alert('Reserva exitosa')
      
     } catch (error) {
      console.log ('Error', error)
      alert('No se realizó la reserva')
    }
  }


  return (
    <Page>
      <h3>Formulario de reserva</h3>
      <form onSubmit={bookingFormHandler} className="form">
        <div>
          <label>Fecha de la reserva</label>
          <input value={bookingDate} type="date"
            onChange={ e => setBookingDate(e.target.value) }
          />
        </div>
        <div>
          <label>Comentarios adicionales</label>
          <textarea value={comments} onChange={ e => setComments(e.target.value) } ></textarea>
        </div>
        <Button disabled={!isValidForm} label="Enviar reserva" type="submit" />
      </form>
    </Page>
  )
}
