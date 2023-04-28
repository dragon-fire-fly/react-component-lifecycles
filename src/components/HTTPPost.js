import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            apiResponse: null
        }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: "Hello world!",
                body: "It works!",
                userId: 123,
            }
            ).then(response => {
                this.setState({
                    apiResponse: response.data
                })
            })
    }
    render() {
        const response = this.state.apiResponse
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
            {
                response ? (
                    <div key="response.id">
                        <h1>{response.title}</h1>
                        <h4>User id: {response.userId}</h4>
                        <p>{response.body}</p>
                        <p>Post id: {response.id}</p>
                    </div>

                ) : (
                    <p>Please click the button above</p>
                )
            }
        </div>
        )
    }
}

export default HTTPPost