import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class ApiData extends Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">

            {this.props.apiData.map((item, idx) => {
                return (
                    // <div key={idx}>
                    //     <h1>{item.strDrink}</h1>
                    //     <img src={item.strDrinkThumb} alt=""/>
                    // </div>
                    <Col>
                    <Card style={{ width: '18rem' }} key={idx}>
                        <Card.Img variant="top" src={item.strDrinkThumb} alt="" />
                        <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                            <Button onClick={()=>{this.props.addToMyFav(item)}} variant="primary">Add to My Favorite</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                )
            })}
            </Row>
        )
    }
}

export default ApiData


