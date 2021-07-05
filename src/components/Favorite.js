import React, { Component } from 'react'
import axios from 'axios';
import ApiCrudData from './ApiCrudData';
import UpdateForm from './UpdateForm'
export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showModel:false,
            apiCrudData: [],
            url: process.env.REACT_APP_SERVER,
            id: 0,
            strDrink: '',
            strDrinkThumb: '',
            showUpdateForm: false

        }
    }

    componentDidMount = async () => {
        // const request = await axios.get(`http://localhost:3070/favi`);
        const request = await axios.get(`https://back-401-awon.herokuapp.com/favi`);
        console.log(request);
        this.setState({
            apiCrudData: request.data,
            show: true
        })
    }


    showUpdateForm = (id, strDrink, strDrinkThumb) => {
        this.setState({
            id: id,
            strDrink: strDrink,
            strDrinkThumb: strDrinkThumb,
            showUpdateForm: true,
        })
    }

    deleteItem = async (idNumber) => {
        // const newData = await axios.delete(`http://localhost:3070/favi/${idNumber}`)
        const newData = await axios.delete(`https://back-401-awon.herokuapp.com/favi/${idNumber}`)
        console.log(newData);
        this.setState({
            apiCrudData: newData.data,
        })
    }

    updateName = (e) => {
        this.setState({
            strDrink: e.target.value
        })

    }
    updateImg = (e) => {
        this.setState({
            strDrinkThumb: e.target.value
        })

    }

    updateItem = async(e)=>{
        e.preventDefault();
        const updateData ={
            strDrink:this.state.strDrink,
            strDrinkThumb:this.state.strDrinkThumb
        }
        // const request =await axios.put(`http://localhost:3070/favi/${this.state.id}`,updateData)
        const request =await axios.put(`https://back-401-awon.herokuapp.com/favi/${this.state.id}`,updateData)
        this.setState({
            apiCrudData:request.data,
        })
    }

    handleClose = ()=>{
        this.setState({
            show:false
        })
    }

    render() {
        return (
            <div>

                {this.state.showUpdateForm && <UpdateForm
                    strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    updateItem={this.updateItem}
                    updateName={this.updateName}
                    updateImg={this.updateImg}
                    show={this.state.show}
                    handleClose={this.handleClose}

                />}
                <ApiCrudData
                    apiCrudData={this.state.apiCrudData}
                    deleteItem={this.deleteItem}
                    showUpdateForm={this.showUpdateForm}
                />
            </div>
        )
    }
}

export default Favorite
