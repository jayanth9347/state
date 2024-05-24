import {Component} from 'react'



class App extends Component{
    state = {click:0} //Creating a state 
    onJayanth = () => {
        this.setState(prvt => ({click: prvt.click+1})) // Return and update frequently...
    }
    onT = () => {
        this.setState({click: "im tharuni and i pursuing mca"}) // Just for only update.....
    }
    onHide = () => {
        this.setState({click: ""})
    }
    render(){
        const {click} = this.state
        return(
            <div>
            <h1> Im Jayanth </h1>
            <p> {click} </p>
            <button onClick={this.onJayanth}> J </button>
            <button onClick={this.onT}> T </button>
            <button onClick={this.onHide}> Remove </button>
            </div>
        )
    }
}

export default App
