import React, { Component } from 'react'
import spinloader from "./spinloader.gif"

export class SpinLoader extends Component {

    render() {
        return (
            <div className="text-center my-3">
                <img src={spinloader} alt="loading" />
            </div>
        )
    }
}

export default SpinLoader