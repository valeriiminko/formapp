import React, { Component } from 'react';
import '../Finish/Finish.scss';
import countries from '../data/countries';
import cities from '../data/cities';

export default class Finish extends Component {
    render() {
        const {loading, data}= this.props;
        const {name, surname, gender, country, city, email, mobile, image} = data;
        const countryName = countries.find(i => i.id === +country).name;
        const cityName = cities[city].name;
        console.log(name);
        return (
            <React.Fragment>
                {!data ? null : (<div className="finish">
                <img src={image}/>
                <ul>
                    <li>User: {name} {surname}</li>
                    <li>Gender: {gender}</li>
                    <li>Location: {countryName} {cityName}</li>
                    <li>Email: {email} </li>
                    <li>Phone number: {mobile}</li>
                </ul>
            </div>)}
            </React.Fragment>
        )
    }
}
