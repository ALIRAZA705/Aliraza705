import React, { Component } from 'react'
import { Button,Badge, Card, CardBody, CardHeader, Col } from 'reactstrap';
import {  ButtonDropdown,DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';


class Ali extends Component {
constructor(props){

super(props);
this.state =
{
    dropdownOpen : false,
   

};
this.toggle=this.toggle.bind(this);
}
toggle(){
this.setState({dropdownOpen : true});

}
// constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: new Array(19).fill(false),
//     };
//   }

//   toggle(i) {
//     const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
//     this.setState({
//       dropdownOpen: newArray,
//     });
//   }

    render() {

        return (

            <div>
                <h2>this is ali </h2> 
                <br/>
                <Button size="lg" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-facebook"></i><span>Facebook</span></Button>
    <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen} toggle={() => { this.toggle(1); }}>
                  <DropdownToggle caret color="primary">
                    Primary
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action Disabled</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
            </div>
        );

    }

}
export default Ali;