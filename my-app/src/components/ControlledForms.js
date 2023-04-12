import React, { Component } from 'react'

export class ControlledForms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "website",
            comments: "",
        }
    }


    // computed property name
    // handleChange = (event) => {
    //     const {name, value} =event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

            // or....
            // let newValue = event.target.value
            // console.log(newValue)
            // this.setState({
            //     name: newValue
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value

            // or....
            // let newValue = event.target.value
            // console.log(newValue)
            // this.setState({
            //     name: newValue
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value

            // or....
            // let newValue = event.target.value
            // console.log(newValue)
            // this.setState({
            //     name: newValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your Name: </label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id='id-name'
                            name='name'
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query Category: </label>
                        <select 
                            id='id-category' 
                            name='category'
                            value={this.state.category}
                            onChange={this.handleCategoryChange}>
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments: </label>
                        <textarea 
                            id='id-comments' 
                            name='comments' 
                            value={this.state.comments}
                            onChange={this.handleCommentsChange}
                            />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForms