import React, { Component } from 'react'
import spinloader from "./spinloader.gif"

export class SpinLoader extends Component {

    render() {
        return (
            <div className="text-center">
                <img src={spinloader} alt="loading" />
            </div>
        )
    }
}

export default SpinLoader