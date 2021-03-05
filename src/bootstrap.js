import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'

export default class Bootstrap extends Component {
    constructor()
        {
            super();
            this.state={
                show:false
            }
        }
        handlemodal()
        {
            this.setState({show: !this.state.show})

        }
    render() {
        
        return (
            <div>
                <Button onClick={()=>this.handlemodal()}>click me</Button>
                <Modal show={this.state.show} onHide={()=>this.handlemodal()}>
                    <Modal.Header closeButton>Modal heading</Modal.Header>
                    <Modal.Body>
                        hello everyone
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=> this.handlemodal()}>Close</Button>
                        <Button onClick={()=> this.handlemodal()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
