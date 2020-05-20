import React, { Component } from 'react';
import '../Navigation/Navigation.scss';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import form_validation from '../form_validation';


export default class Navigation extends Component {
    
    StepsStatusNext = () => {
        const {steps, activeStep, usersdata} = this.props;
       
        let errors = form_validation(activeStep, usersdata);
        for(let i = 0; i<steps.length; i++){
            if(activeStep === i && Object.keys(errors).length === 0){
             var item = steps[i + 1].route;
            }
        }

        return item;
    }
    
    StepsStatusPrev = () => {
        const {steps, activeStep} = this.props;
        

        for(let i = 0; i<steps.length; i++){
        
            if(activeStep === i){
                var itemprev = steps[i - 1].route;
               }
        }

        return itemprev;
    }
    render() {
        const {activeStep, onNextPage, onPreviousPage, NavigationUp,
             steps, onRefreshPage, onReloadBasic, loading} = this.props;
        const [{route, id}] = steps;
        const disabled = steps[0].active ? true : false;
        
         const spinner = loading ? <Loader />: null;
        
        return (
            <div className="btn-group" role="group">
               
               
                {steps[3].active && (
                <Link to ={onReloadBasic}>
                        <span onClick={onRefreshPage} className='btn btn-light'>
                            Reset
                        </span>
                </Link>)
                }
                {!steps[3].active &&
                (<React.Fragment>
                    {steps[0].active ? <Link to='/'>
                        <span onClick={(event) => event.preventDefault()} type="button" 
                            className={steps[0].active ? 'btn btn-light disabled' : 'btn btn-light'}
                            disabled={disabled}
                            >
                            Previous
                        </span>
                    </Link> : <Link to={this.StepsStatusPrev}>
                        <span onClick={onPreviousPage} type="button" 
                            className='btn btn-light'
                            >
                            Previous
                        </span>
                    </Link>}
                    <Link to={this.StepsStatusNext}>
                        <span onClick={onNextPage} type="button" 
                        className="btn btn-info">
                            Next
                        </span>
                    </Link>
                
                
                    </React.Fragment>)
                }
               
            </div>
        )
    }
}
