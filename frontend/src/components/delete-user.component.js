import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteUser extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_description: '',
            user_name: '',
            user_password: ''
        };
    };

    componentDidMount() {
        axios.get('http://localhost:4000/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    user_description: response.data.user_description,
                    user_name: response.data.user_name,
                    user_password: response.data.user_password
                })
            })
            .catch(function(err) {
                console.log(err);
            });
    };


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            user_description: this.state.user_description,
            user_name: this.state.user_name,
            user_password: this.state.user_password
        };
        axios.delete('http://localhost:4000/users/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        this.props.history.push('/')
    };


    render() {
        return (
            <div className="container delete">
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <h3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Delete User</h3>
                    <fieldset>
                        <div className="row">
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Username</label>
                            <div className="control col-lg-2 col-md-4 col-sm-9 col-xs-9">
                                {this.state.user_name}</div>
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Password</label>
                            <div className="control col-lg-2 col-md-4 col-sm-9 col-xs-9">
                                {this.state.user_password}</div>
                            <label className="control-label col-lg-1 col-md-2 col-sm-3 col-xs-3">Description</label>
                            <div className="control col-lg-3 col-md-4 col-sm-9 col-xs-9">
                                {this.state.user_description}
                            </div>
                            <div className="control col-lg-2 col-md-6 col-sm-12 col-xs-12 text-right">
                                <input type="submit"
                                       className="btn btn-danger"
                                       value="Delete User"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}