import axios from 'axios';
import React, { Component } from 'react'
import ApiData from './ApiData';
export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            apiData: [],
            url: process.env.REACT_APP_SERVER,

        }
    }

    componentDidMount = async () => {
        // const request = await axios.get(`http://localhost:3070/getData`);
        const request = await axios.get(`https://back-401-awon.herokuapp.com/getData`);
        console.log(request);
        this.setState({
            apiData: request.data,
            show: true
        })
    }

    addToMyFav = async (data) => {
        console.log(data)
        // await axios.post(`http://localhost:3070/favi`,data)
        await axios.post(`https://back-401-awon.herokuapp.com/favi`,data)
    }


    render() {
        return (
            <div>
                <ApiData
                    apiData={this.state.apiData}
                    addToMyFav={this.addToMyFav}
                />
            </div>
        )
    }
}

export default Main
