import React, { useState, useEffect, useContext } from 'react'
import { Page } from '../Page'
import { Button } from '../../components/Button'
import { validateEmail } from './../../utils/validateEmail'
import { UserContext } from './../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { requestHttp } from './../../services/HttpServer'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const history = useHistory()

  useEffect(() => {
    setIsValidForm(validateEmail(email) && password !== '')
  }, [email, password])

  const loginFormHandler = (e) => {
    e.preventDefault()
    const form = {
      email,
      password
    }
    console.log('form login', form)
    validateUser(form)
  }

const validateUser = async (data) => {
  try {
    const response = await requestHttp('post', 'users/login', data)
    setUser({ isAutenticated: true })
    localStorage.setItem('TOKEN', response.token)
    setTimeout(() => {
      history.push('/')
    }, 2000)
   } catch (error) {
    alert ('Error usuario no válido')    
  }
}

  /*const validateUser = () => {
    const emailUser = email
    const passUser = password
    /* TODO: cambiar la variable del usuario (isAuthenticated)
    * a: true, Si y solo siii:
    * email = "pepito@gmail.com" y contraseña = "123456"
    * y lo redirija al home de la app
    */
 /*  if (emailUser === "felixescobar984@gmail.com" && passUser === "123456") {
     setUser({ isAutenticated: true})
     history.push('/')
   } else {
     setPassword('')
     alert('Error usuario')
   }
  } 
*/
  return (
    <Page>
      <h3>Inciar sesión</h3>
      <form onSubmit={loginFormHandler} className="form">
        <div>
          <label>Correo electrónico</label>
          <input value={email} type="text"
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input value={password} type="password"
            onChange={ e => setPassword(e.target.value) }
          />
        </div>
        <Button disabled={!isValidForm} label="Ingresar" type="submit" />
        { user.name }
        <Button label="Si no estás registrado.... Regístrate " type="submit" />
      </form>
    </Page>   
  )
}
