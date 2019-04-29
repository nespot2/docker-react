import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        };

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //we called setState
            position => this.setState({lat: position.coords.latitude}),

            err => this.setState({errorMessage: err.message})

        );
    }

    render() {
        const errorMessage = this.state.errorMessage;
        const lat = this.state.lat;



        if(errorMessage){
            return <div>ErrorMessage: {errorMessage}</div>
        }

        if(lat){
            return <div>Latitude: {lat}</div>
        }

        return <div>loading</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
