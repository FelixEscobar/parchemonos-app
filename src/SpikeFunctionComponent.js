import React, { useState, useEffect } from 'react'

export const SpikeFunctionComponent = (props) => {

    const [number1, setNumber1] = useState(3)
    const [number2, setNumber2] = useState(6)
    const [sum, setSum] = useState(0)

    useEffect(() => {
console.log('Inició el componente')
setSum(number1+number2)

    } [number1, number2])
    
return {
    <div>
    <p> holas function component</p>
    <label>Número 1</label>
    <input 
    value={number1} type="text" />
    onChange = {e =}
    <br /br>
    <label>Número 2</label>
    <input value={this.state.number2} type="text" />
    <br /br>
    <p>La suma de {number1} + {number2} es </p>
    </div>
)
}