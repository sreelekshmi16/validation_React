import React, { Fragment, Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import SearchComponent from '../../Components/searchComponent'

class Project extends Component {
    state = {
        searchProjectList: []
    }
    componentDidMount() {
        console.log("----state", this.state)
        const { projectList } = this.props;
        this.setState({
            searchProjectList: projectList
        })
    }

    renderProjectTable = () => {
        const{searchProjectList} = this.state;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Project name</th>
                    </tr>
                </thead>
                <tbody>
                {searchProjectList.map(item=>
                    <tr >
                        
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                       
                    </tr>
                )}
                </tbody>
            </Table>

        )
    }
    renderSearch=()=>(
       < SearchComponent/>
    )

    render() {
        const { searchProjectList } = this.state;
        return (
            <Fragment>
                {this.renderSearch()}
                {this.renderProjectTable()}
           </Fragment>
           
        )

    }
}
export default Project