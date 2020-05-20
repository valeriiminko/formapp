import React, { Component } from 'react';
import '../Basic/Basic.scss';

export default class Basic extends Component {
    render() {
        const {data: {name, surname, pass, repeatpass, gender}, 
        errorsdata, onStatusChanged} = this.props;
        return (
            
                <form id="form-wrapper">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className={errorsdata.name ? "form-control invalid": "form-control"} 
                        id="name" 
                         value={name}
                        placeholder="Enter your name"
                        onChange={onStatusChanged}
                        />
                        {errorsdata.name && <div className="invalid-feedback">{errorsdata.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" name='surname' className={errorsdata.surname ? "form-control invalid": "form-control"} 
                        id="surname" 
                        value={surname} 
                        placeholder="Enter your surname"
                        onChange={onStatusChanged} />
                        {errorsdata.surname && <div className="invalid-feedback">{errorsdata.surname}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name='pass' className={errorsdata.pass ? "form-control invalid": "form-control"}
                        id="pass" 
                        value={pass}
                        placeholder="Enter password" 
                        onChange={onStatusChanged}/>
                        {errorsdata.pass && <div className="invalid-feedback">{errorsdata.pass}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatpass">Repeat Password</label>
                        <input type="password" name='repeatpass' className={errorsdata.repeatpass ? "form-control invalid": "form-control"} 
                        id="repeatpass" 
                        value={repeatpass}
                        placeholder="Enter email" 
                        onChange={onStatusChanged}/>
                        {errorsdata.repeatpass && <div className="invalid-feedback">{errorsdata.repeatpass}</div>}
                    </div>
                    <React.Fragment>
                        <span>Gender</span>
                        <div className="form-check radio">
                            <input className="form-check-input" type="radio" 
                                name="male" id="male" value="male" 
                                onChange={onStatusChanged}
                                checked={gender == "male"}/>
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check radio">
                            <input className="form-check-input" type="radio" 
                                name="female" id="female" value="female"
                                onChange={onStatusChanged} 
                                checked={gender == "female"} />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </React.Fragment>
                </form>
            
        )
    }
}
