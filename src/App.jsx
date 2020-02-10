import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: 'This <h2> element is rendered from  a state',
            text: '',
            hasLoaded: false,
            buttontext: 'Click to Start'
        }

    }
    handleTextInput = (value) => {
        this.setState({ text: value })
    }

    handleClick = () => {
        if (this.state.hasLoaded) {
            this.setState({ buttontext: 'Click to Start' })
            this.setState({ hasLoaded: false })
        } else {
            this.setState({ buttontext: 'Loading...' })
            this.timer = setTimeout(() => {
                this.setState({ hasLoaded: true })
            }, 3000)
        }
    }
    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <div>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}> Welcome to the first Lab of React</h1>
                        <h3 style={{ color: 'green' }} >My name is {this.props.person} and I am learning how to use react. Please take a long look.</h3>
                        <h2 style={{ display: 'flex', justifyContent: 'center' }}>{this.state.info}</h2>
                    </div>
                    <h3 style={{ border: 'solid black 2px', padding: '10px' }} >{this.state.text}</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input
                            style={{ height: '20px', fontSize:'20px', padding:'5px' }}
                            placeholder="Enter some text"
                            value={this.state.text}
                            onChange={(event) => this.handleTextInput(event.target.value)}
                        />
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={this.handleClick} style={styles.endButton} >Click to Close!</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={this.handleClick} style={styles.startButton} >{this.state.buttontext} </button>
                    </div>
                </>
            )
        }
    }
}

const styles = {
    startButton: { padding: '12px', fontSize: '24px', backgroundColor: 'coral', width: '100%', outline: 'none' },
    endButton: { padding: '12px', fontSize: '18px', backgroundColor: 'yellow', width: '50%', outline: 'none' },

}


// const App = (props) =>{
//     return (
//         <div>
//             <h1>Welcome to the first Lab of React</h1>
//             <h2>My name is {props.person} </h2>
//         </div>
//     )
// }

export default App