import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
export class UpdateForm extends Component {
    render() {
        return (


            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { this.props.updateItem(e) }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name of the drink:</Form.Label>
                            <Form.Control type="text" onChange={this.props.updateName} value={this.props.strDrink} />
                            <Form.Label>Drink image (url):</Form.Label>
                            <Form.Control type="text" onChange={this.props.updateImg} value={this.props.strDrinkThumb} />

                        </Form.Group>

                        <Button variant="primary" type="submit" onClose={this.props.handleClose}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>



        )
    }
}

export default UpdateForm


