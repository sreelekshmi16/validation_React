import React, { Fragment,Component } from 'react';
import { Table ,Row,Col} from 'reactstrap';
import SearchComponent from '../../Components/searchComponent'

class Employee extends Component {
    state={
        searchEmployeeList :[],
        input :''
    }
    componentDidMount(){
        const{EmployeeList} = this.props;
        this.setState({
            searchEmployeeList:EmployeeList
        })
    }

renderEmployeeTable=()=>{
    const{searchEmployeeList} = this.state
    return(
        <Table dark>
        <thead>
            
          <tr>
            <th>Id</th>
            <th>Employee name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
         
        </thead>
        <tbody>
            {searchEmployeeList.map(item=>
          <tr>
              
           
            <td>{item.id}</td>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.Address}</td>
          </tr>
             )}
              </tbody>
          </Table>
    )
}
renderSearch=()=>(
    <SearchComponent
   searchHandler= {this.searchHandler}
   onSearchHandler={this.onSearchHandler}
   onClearHandler={this.onClearHandler}
   input ={this.state.input}/>
)

searchHandler=(event)=>{
    const{EmployeeList} = this.props
    const searchString = event.target.value;
    console.log("searched value",searchString);
    this.setState({
        input : searchString,

    })
}
onSearchHandler=()=>{
    console.log("check check")
    const{EmployeeList} = this.props;
    const{input} = this.state;
    const searchlist = EmployeeList.filter(item=>{
        console.log("item",item)
        return item.Name.toLowerCase().includes(input.toLowerCase())
    })
    console.log("searchlist",searchlist)
    this.setState({
        // input : searchString,
        searchEmployeeList:searchlist
    })
}
onClearHandler=()=>{
    console.log("clear check")
    const{EmployeeList} = this.props;
    
    this.setState({
        input:'',
        searchEmployeeList:EmployeeList
    })

}

    render(){
        console.log("props",this.props)
        console.log("__________state",this.state)
      

        return(
            <Fragment>
                {this.renderSearch()}
                {this.renderEmployeeTable()}
                
            </Fragment>
          

        )
    }




}
export default Employee;