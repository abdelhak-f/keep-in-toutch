import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.fname}
                </td>
                <td>
                    {this.props.obj.lname}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.message}
                </td>
            </tr>
        );
    }
}

export default DataTable;