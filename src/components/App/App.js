import React, { Component } from 'react';
import '../App/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from '../Basic';
import Contacts from '../Contacts';
import Image from '../Image';
import Finish from '../Finish';
import Navigation from '../Navigation';
import countries from '../data/countries';
import form_validation from '../form_validation';
import cities from '../data/cities';
import HandleStep from '../HandleStep';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from '../Loader';

export default class App extends Component {

  state = {
    activeStep: 0,
    steps: [
      {name: 'Basic', route: '/', id:0, active: true, done: false},
      {name: 'Contacts', route: '/contacts', id:1, active: false, done: false},
      {name: 'Image', route: '/image', id:2, active: false, done: false},
      {name: 'Finish', route: '/finish', id:3, active: false, done: false}
    ],
    usersdata: {
      name: '', surname: '', pass: '', repeatpass: '', gender: 'male',
      email: '', mobile: '', country: '1', city: '',
      image: ''
    },
    errorsdata: {
      name: false, surname: false, pass:false, repeatpass: false, gender: false,
      email: false, mobile: false, country: false, city: false,
      image: false
    }, 
    loading: false
  }

  onStatusChanged = e => {
    const newUsersData = {
      ...this.state.usersdata,
      [e.target.name]: e.target.value
    }

    const newErrorsData = {
      ...this.state.errorsdata,
      [e.target.name]: false
    }

    if(e.target.name === 'male'){
      newUsersData.gender = 'male';
    }else{
      newUsersData.gender = 'female';
    }
  
    if(e.target.name === 'country'){
      newUsersData.city = '';
      newErrorsData.city = false;
    }

    this.setState((state) =>{
      return{
        ...state,
        usersdata: newUsersData,
        errorsdata: newErrorsData
      }
    })
  }

  onNextPage = () => {
    const {activeStep, steps, usersdata, errorsdata} = this.state;
    let errors = form_validation(activeStep, usersdata);
    console.log(Object.keys(errors).length)
    if(Object.keys(errors).length === 0){
      const newActiveStep = activeStep + 1;
      const newSteps = [...steps];
      newSteps[newActiveStep].active = true;
      newSteps[activeStep].active = false;
      console.log(steps[newActiveStep]);
      newSteps[activeStep].done = true;

      this.setState({
        activeStep: newActiveStep,
        steps: newSteps
      })
    }else{
      this.setState({
        errorsdata: errors
      })
    }
  }

  onPreviousPage = () => {
    const {activeStep, steps} = this.state;
    const PrevStep = activeStep - 1;
    const newSteps = [...steps];
    newSteps[PrevStep].active = true;
    newSteps[PrevStep].done = false;
    newSteps[activeStep].active = false;
    newSteps[activeStep].done = false;

    this.setState({
      activeStep: PrevStep,
      steps: newSteps
    })
  }

  onRefreshPage = () => {
    let newobj = {};
    this.setState({
      loading: true
    })
    setTimeout(() => {
      for(let k in this.state.usersdata){
        newobj[k] = this.state.usersdata[k];
        newobj[k]=''
      }
  
      this.setState({
        usersdata: newobj,
        loading: false
      });
      console.log(this.state.loading)
    },2000);

    setTimeout(() => {
      window.location.reload()
      console.log("reload");
    }, 2500); 
    
  }

  onReloadBasic = () => {
    let item = '';
    setTimeout(() => {
      item='/basic';
      console.log("item")
    }, 2500);
    return item;
  }
  
  render() {
   const {activeStep, usersdata, errorsdata, steps, loading} = this.state;
   console.log(Object.values(usersdata).some(x => (x == null || x == '')))// нужно проверить на наличие пустых строк https://stackoverflow.com/questions/27709636/determining-if-all-attributes-on-a-javascript-object-are-null-or-an-empty-string
    return (
      <React.Fragment>
      { steps[3].active && Object.values(usersdata).some(x => (x == null || x == '')) ? null:
      (<div className='container components-container'>
        <Router>
          {loading ? <Loader /> : (
            <div className={loading ? 'd-none': 'card'}>
           
            {(steps[3].active && !usersdata.length )? null: <HandleStep steps={steps} activeStep={activeStep} />}
            {steps[0].active && <Route path={steps[0].route}  exact 
            render = {() => 
              <Basic data={usersdata}
              errorsdata={errorsdata}
              onStatusChanged={this.onStatusChanged}/>
             } />}
            
            {steps[1].active && <Route path={steps[1].route} 
              render={() => <Contacts data={usersdata}
              errorsdata={errorsdata} 
              onStatusChanged={this.onStatusChanged}/>} />
              }
            {steps[2].active && <Route path={steps[2].route} 
                render = {() => <Image data={usersdata}
                errorsdata={errorsdata} 
                onStatusChanged={this.onStatusChanged}/>}/>}
           
            {steps[3].active && <Route path={steps[3].route} 
              render={() => <Finish data={usersdata} loading={loading}/>}
            />}
            {steps[3].active && Object.values(usersdata).some(x => (x == null || x == '')) ? null: <Navigation activeStep={activeStep} 
            steps = {steps} onRefreshPage={this.onRefreshPage} onReloadBasic={this.onReloadBasic}
            onNextPage={this.onNextPage}  NavigationUp={this.NavigationUp} usersdata={usersdata}
            onPreviousPage={this.onPreviousPage} loading={loading}/>}
          </div>
          )}
          
        </Router>
      </div>)
        }
        </React.Fragment>
    )
  }
}
