import React, { Component } from 'react'

class RandomCat extends Component {
    constructor() {
        super();
        this.state = {
            urls: [],
        }
    }

    render() {
        return (
            <div>
                <h1>Random Cat!</h1>
            </div>
        )
    }
}

export default RandomCat