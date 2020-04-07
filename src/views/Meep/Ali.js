import React, { Component } from 'react'
import { Button,Badge, Card, CardBody, CardHeader, Col } from 'reactstrap';
import {  ButtonDropdown,DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Ali extends Component {
// constructor(props){

// super(props);
// this.state =
// {
//     dropdownOpen : false,
//    startdate : new  Date(),
//    buyitems : ['ali','raza','mobeen','younis'],
//    user:[]

// };
// this.toggle=this.toggle.bind(this);
// }


// }
// toggle(){
// this.setState({dropdownOpen : true});

// }
// addditem(e){
// e.preventDefault();
// const {buyitems} = this.state; 
// const newitem =this.newitem.value;
// this.setState({
//   buyitems : [...this.state.buyitems , newitem]
// });
// this.addForm.reset();
// }
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(19).fill(false),
      startdate : new  Date(),
      enddate : new  Date(),
      user:[],
    };
  }
  handlestartchange = date =>{
    this.setState({
      startdate : date
      

     });
     console.log("start task date is  = " +this.state.startdate);
    }
    handleendchange = date =>{
      this.setState({
        enddate : date
  
       });
       console.log("start task date is  = " +this.state.enddate);
      }
  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }
componentDidMount(){
  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(res =>{

if(res && res.data)
{
  this.setState({
user : [...res.data]


  });
  console.log(res.data);
}


  });
}
renderuser(){
  if(this.state.user.length <= 0){
    return <div>loading.....</div>
  }
  else {
    return  this.state.user.map((val,key) => {
      return <div key={key}> {val.name}   </div>
    });
  }
}
renderuser1(){
  if(this.state.user.length <= 0){
    return <div>loading.....</div>
  }
  else {
    
    return this.state.user.map((item,key)=>{

      return <div key={key}>{item.name}</div>
      
                      }); 
  }
}



    render() {

      // const {buyitems} = this.state; //destructure inside render just before return method
        return (

            <div>
 
{this.renderuser()} 
{/* <div className="row">
  <div className="col-xs-12 col-md-8">.Ali</div>
  <div className="col-xs-6 col-md-4">.Raza</div>
</div>

<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div> */}

<div class="row">
<div class="col-xs-6 col-md-3"> 
<div className="col-xs-3 col-md-6">
             <h5>Start date : </h5>
             </div>

<DatePicker selected = {this.state.startdate} onChange = {this.handlestartchange}/>
 </div>
 <div class="col-xs-6 col-md-3"> <h5>End  date : </h5> 
 {/* {this.state.startdate}; */}
<DatePicker selected = {this.state.enddate} onChange = {this.handleendchange}/>
</div>

 {/* {this.state.enddate}; */}
        {/* <h2> {buyitems} <br/></h2> */}
        {/* <div>
          <header>
        <form  ref={(input) => {this.addForm = input}} className = "form-inline" onSubmit={(e) => {this.addditem(e)}}> 
    <div className="form-group">
<label className = "sr-only" htmmlfor = "newItemInput">Add new item</label>
<input ref={(input) => {this.newitem = input}}   type ="text" placeholder ="Bread" className = "form-control" id= "newItemInput"/>


    </div>
    <button type = "submit" className = "btn btn-primary">Add</button>
  </form>
  </header>
  </div>
<table className = "table">
  
  <caption>Shopping list</caption>

  <thead>
<tr>
<th>#</th>
<th>item</th>
<th>action</th>
</tr>

  </thead>
  <tbody>
  {
buyitems.map(items => {
  return (<tr>
<th scope = "row"> 1</th>
<td>{items}</td>
<td>Button</td>
  </tr>
  
 
  
  
  )
})
    }

  </tbody>
</table> */}






                {/* <h2>programing with Raza </h2>  
                <br/> */}
                <div class="col-xs-6 col-md-3">
 <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen[2]} toggle={() => { this.toggle(2); }}>
 
 <div className="col-xs-6 col-md-7">
             <h5>button1 : </h5>
             </div>   
               <DropdownToggle caret color="primary">
                  Primary
                 </DropdownToggle>
                 {/* {this.state.user.map(itme=>{})} */}



                  <DropdownMenu>
       
              <DropdownItem header>Header</DropdownItem>
               <DropdownItem disabled>Action Disabled</DropdownItem>
               {this.state.user.map(itme=>
              <DropdownItem key={itme.name}>  {itme.name}</DropdownItem>
                )}
                <DropdownItem divider />
              {/* <DropdownItem>Another Action</DropdownItem> */}
               </DropdownMenu>
            </ButtonDropdown> 
            </div>

            <div class="col-xs-6 col-md-3">
 <ButtonDropdown className="mr-1" isOpen={this.state.dropdownOpen[1]} toggle={() => { this.toggle(1); }}>
 <div className="col-xs-6 col-md-7">
             <h5>button1 : </h5>
             </div>
               <DropdownToggle caret color="primary">
                  Secondary
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





            </div>
            </div>
        );

    }

  }

export default Ali;