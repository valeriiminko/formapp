import React, { Component } from 'react';
import '../HandleStep/HandleStep.scss';

export default class HandleStep extends Component {
    
    StepView = (arr) => {
        return arr.map(item => {
            return (
                
                    <div key={item.id} className={item.active ? "step active rounded-circle": item.done ? "step done rounded-circle": "step rounded-circle"}>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                     </div>
                     
                
            )
        })
    }
    
    render() {
        const {steps, activeStep} = this.props;
        const items = this.StepView(steps);
        console.log(steps);
        return (
            <div className="steps-container">
                 {items}
            </div>
        )
    }
}



