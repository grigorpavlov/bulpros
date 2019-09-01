import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    };

    axiosGetFunction () {
        axios.get('http://localhost:4000/users')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(function (err) {
                console.log(err)
            });
    }

    componentDidMount() {
        this.axiosGetFunction();
    };

    componentDidUpdate() {
        this.axiosGetFunction();
    };

    modifyFormatter(cell) {
        var to = '/modify/'+cell;
        return (<Link to={to} className="btn btn-warning">Modify</Link>);
    };

    deleteFormatter(cell) {
        var to = '/delete/'+cell;
        return (<Link to={to} className="btn btn-danger">Delete</Link>);
    };


    render() {
        return (
            <div className="container users">
                <form className="form-horizontal">
                    <h3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Users List</h3>

                    <BootstrapTable data={ this.state.users }
                                    search
                                    searchPlaceholder='Search Name...'>
                        <TableHeaderColumn dataField='user_name'
                                           isKey={ true }
                                           width='25%'
                                           className="table_name">Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='user_password'
                                           width='25%'
                                           searchable={ false }
                                           className="table_password">Password</TableHeaderColumn>
                        <TableHeaderColumn dataField='user_description'
                                           width='30%'
                                           searchable={ false }
                                           className="table_description">Description</TableHeaderColumn>
                        <TableHeaderColumn dataField='_id'
                                           dataFormat={this.modifyFormatter}
                                           width='10%'
                                           searchable={ false }
                                           dataAlign='center'
                                           headerAlign='center'
                                           className="table_modify">Modify</TableHeaderColumn>
                        <TableHeaderColumn dataField='_id'
                                           dataFormat={this.deleteFormatter}
                                           width='10%'
                                           searchable={ false }
                                           dataAlign='center'
                                           headerAlign='center'
                                           className="table_delete">Delete</TableHeaderColumn>
                    </BootstrapTable>
                </form>
            </div>
        );
    };
};