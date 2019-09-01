import React, { Component } from 'react';
import axios from 'axios';

export default class ModifyUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserDescription = this.onChangeUserDescription.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
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

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    };

    onChangeUserPassword(e) {
        this.setState({
            user_password: e.target.value
        });
    };

    onChangeUserDescription(e) {
        this.setState({
          user_description: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            user_description: this.state.user_description,
            user_name: this.state.user_name,
            user_password: this.state.user_password
        };
        axios.post('http://localhost:4000/users/modify/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data))
        this.props.history.push('/')
    };


    render() {
        return (
            <div className="container modify">
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <h3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Modify User</h3>
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
                                       onChange={this.onChangeUserDescription} />
                            </div>
                            <div className="control col-lg-2 col-md-6 col-sm-12 col-xs-12 text-right">
                                <input type="submit"
                                       className="btn btn-warning"
                                       value="Modify User"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}