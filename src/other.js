import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'

export default class Other extends Component {
    constructor()
        {
            super();
            this.state={
                show:false
            }
        }
        handlemodal()
        {
            this.setState({show:true})

        }
    render() {
        
        return (
            <div>
                <Button onClick={()=>this.handlemodal()}>click me</Button>
                <Modal show={true}>
                    <Modal.header>Modal heading</Modal.header>
                    <Modal.Body>
                        hello everyone
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
