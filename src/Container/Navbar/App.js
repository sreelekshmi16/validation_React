import React, { Fragment,Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input, Table } from 'reactstrap';
import Employee from '../Navbar/Employee';
import Project from '../Navbar/Project';
import classnames from 'classnames';
import SignUp from './Signup';
import InputField  from './Inputfield'

// import logo from './logo.svg';

const projectList = [{ id: 1, name: "abc" }, { id: 2, name: "def" }, { id: 3, name: "ghi" }]
const EmployeeList = [{ id: 1, Name: "anu", Age: "20", Address: "jdjj,male",Ischecked: "false"},
{ id: 2, Name: "Banu", Age: "22", Address: "ddhgg,dfgyd", Ischecked: "false" },
{ id: 3, Name: "chinnu",  Age: "24", Address: "ddvd,hhdgyw", Ischecked: "false" },
{ id: 4, Name: "Divin", Age: "26", Address: "dywhw,nci", Ischecked: "false" },
{ id: 5, Name: "Emil", Age: "29", Address: "ojihc,cvh", Ischecked: "false" },
{ id: 6, Name: "Gowri", Age: "23", Address: "qwyhd,ojoc", Ischecked: "false" },
{ id: 7, Name: "Jhanvi",Age: "22", Address: "fesf,efale", Ischecked: "false" },
{ id: 8, Name: "Karthik",Age: "21", Address: "malfueuf,e", Ischecked: "false" },
{ id: 9,Name: "Lijo", Age: "26", Address: "male", Ischecked: "false" },
{ id: 10, Name: "Midhila",  Age: "29", Address: "feffff,wwf", Ischecked: "false" },
{ id: 11, Name: "Nima",  Age: "28", Address: "effff,emale", Ischecked: "false" },
{ id: 12, Name: "Prithvi",  Age: "26", Address: "wdfw,wfle", Ischecked: "false" },
{ id: 13, Name:"Rohan",  Age: "22", Address: "vgr,eale", Ischecked: "false" }]




class App extends Component {
  state = {
    activeTab: '1',
    EmployeeList: EmployeeList,
    projectList: projectList
  }
  toggle = (tab) => {
    const { activeTab } = this.state
    if (activeTab !== tab)
      this.setState({
        activeTab: tab
      })
  }
  rendernavItems = () => (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => { this.toggle('1') }}
        >
          Project
          </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => { this.toggle('2') }}
        >
          Employee
          </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '3' })}
          onClick={() => { this.toggle('3') }}
        >
        SignUp

        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          className={classnames({ active: this.state.activeTab === '4' })}
          onClick={() => { this.toggle('4') }}>Form</NavLink>
      </NavItem>

    </Nav>


  )
  rendernavContent = () => (
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <Project
        projectList = {this.state.projectList}
        />
      </TabPane>
      <TabPane tabId="2">
        <Employee
          EmployeeList = {this.state.EmployeeList}
        />

      </TabPane>
      <TabPane tabId="3">
        <SignUp
         
        />

      </TabPane>
      <TabPane tabId="4">
        <InputField
         
        />

      </TabPane>

    </TabContent>
  )

  render() {
    return (
      <Fragment>
        <div>
          {this.rendernavItems()}
          {this.rendernavContent()}
        </div>
      </Fragment>
    );
  }
}

export default App;
