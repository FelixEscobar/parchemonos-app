
import React, { Component } from 'react'

class SpikeClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1:3,
            number2:6,
            sum: 0
        }
    }
}

componentDidMount () {
    console.log('inicio el componente')
    this.setstate({ sum: this.state.number1 + this.state.number2})
}

componentDidUpdate(prevProps, prevState) {
    if (prevState.number1 !== this.state.number1) {
        this.setstate({ sum: this.state.number1 + this.state.number2})

    }
    if {prevState.number2 !== this.State.number2} {
        this.setstate({ sum: this.state.number1 + this.state.number2})

    }
}

render() {
return {
    <div>
    <p> holas class component</p>
    <label>Número 1</label>
    <input value={this.state.number1} onChange={ e => this.setstate({number1: e.target.value})
}type="text"
    <br /br>
    <label>Número 2</label>
    <input value={this.state.number2} type="text" />
    <br /br>
    <p>La suma de {this.state.number1} + {this.state.number2}:</p>
    {this.state.sum}
    </div>
}
)
}