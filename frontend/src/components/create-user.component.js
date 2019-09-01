import React, { Component } from 'react';
import axios from "axios";

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserDescription = this.onChangeUserDescription.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_description: "",
            user_name: "",
            user_password: ""
        };
    };

    onChangeUserDescription(e) {
        this.setState({
            user_description: e.target.value
        })
    }

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        })
    }

    onChangeUserPassword(e) {
        this.setState({
            user_password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted!')
        console.log(`User Description: ${this.state.user_description}`)
        console.log(`User Name: ${this.state.user_name}`)
        console.log(`User Password: ${this.state.user_password}`)

        const newUser = {
            user_description: this.state.user_description,
            user_name: this.state.user_name,
            user_password: this.state.user_password
        };
        axios.post('http://localhost:4000/users/create', newUser)
            .then(res => console.log(res.data));

        this.setState({
            user_description: "",
            user_name: "",
            user_password: ""
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="container create">
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <h3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Create New User</h3>
                    <fieldset>
                        <div className="row">
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Username</label>
                            <div className="control col-lg-2 col-md-4 col-sm-9 col-xs-9">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.user_name}
                                       onChange={this.onChangeUserName}/>
                            </div>
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Password</label>
                            <div className="control col-lg-2 col-md-4 col-sm-9 col-xs-9">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.user_password}
                                       onChange={this.onChangeUserPassword}/>
                            </div>
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Description</label>
                            <div className="control col-lg-3 col-md-4 col-sm-9 col-xs-9">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.user_description}
                                       onChange={this.onChangeUserDescription}/>
                            </div>
                            <div className="control col-lg-2 col-md-6 col-sm-12 col-xs-12 text-right">
                                <input type="submit"
                                       className="btn btn-info"
                                       value="Create User"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}