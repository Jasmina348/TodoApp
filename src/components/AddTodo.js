import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodo extends Component {
    state = {
        title: ' '
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        const {title}=this.state;
        e.preventDefault();
        this.props.addTodo(title);
        this.setState({ title: ' ' });
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add the todo item"
                    style={{ flex: "10", padding: "5px" }}
                    value={this.state.title}
                    onChange={this.onChange}

                />

                <input
                    type="submit"
                    value="Submit"
                    style={{ flex: "1" }}
                    className="Submit-btn" />

            </form>
        )
    }
}
//  AddTodo.propTypes =  {
//      addTodo:PropTypes.func.isRequired
//  }

export default AddTodo;