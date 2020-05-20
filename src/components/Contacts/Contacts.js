import React, { Component } from 'react';
import '../Contacts/Contacts.scss';
import countries from '../data/countries';
import cities from '../data/cities';

export default class Contacts extends Component {

  getCities = (country) =>{
    const arr = [];
    for(let key in cities){
        if(cities[key].country === Number(country)){
            arr.push({
                id: key,
                name: cities[key].name
            })
        }
    }
    return arr;
  }


    render() {
        const {data: {email, mobile, country, city}, 
        errorsdata, onStatusChanged} = this.props;
        const getAllcities = this.getCities(country);
        console.log(getAllcities);
        return (
          
                <form id="form-wrapper">
                    <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className={errorsdata.email ? "form-control invalid": "form-control"}
                            id="email"
                            name='email'
                            value={email} 
                            placeholder="Enter email"
                            onChange={onStatusChanged} />
                            {errorsdata.email && <div className="invalid-feedback">{errorsdata.email}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="tel" className={errorsdata.mobile ? "form-control invalid": "form-control"}
                            id="mobile"
                            name='mobile'
                            value={mobile} 
                            placeholder="Enter mobile" 
                            onChange={onStatusChanged}/>
                            {errorsdata.mobile && <div className="invalid-feedback">{errorsdata.mobile}</div>}
                        </div>
                        <div class="form-group">
                            <label htmlFor="country">Select country</label>
                            <select className="form-control" name='country' id="country" value={country}
                            onChange={onStatusChanged}>
                            {countries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
                            </select>
                        </div>
                        <div class="form-group">
                            <label htmlFor="city">Select City</label>
                            <select className={errorsdata.city ? "form-control invalid": "form-control"} name='city' id="city" value={city}
                            onChange={onStatusChanged}>
                                <option value="">Select city</option>
                                {getAllcities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                            </select>
                            {errorsdata.city && <div className="invalid-feedback">{errorsdata.city}</div>}
                        </div>
                </form>
           
        )
    }
}
