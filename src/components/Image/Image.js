import React, { Component } from 'react';
import '../Image/Image.scss';

export default class Image extends Component {
    
    selectImage = e => {
        let reader = new FileReader();
        reader.onload = e => {
            this.props.onStatusChanged({
                target: {
                    name: 'image',
                    value: e.target.result
                }
            })
        }
        reader.readAsDataURL(e.target.files[0]);
    }
  

    render() {
        const {errorsdata, data: {image}, onStatusChanged} = this.props;
        return (
                <form className="image-form">
                   {image ? <img src={image}  /> : <div className="hidden"></div> }
                   <div class="form-group">
                        <label htmlFor="image">Choose your photo</label>
                        <input type="file" class="form-control-file"
                        name="image" id="image" 
                        onChange={this.selectImage}/>
                        {errorsdata.image && <div className="invalid-feedback">{errorsdata.image}</div>}
                    </div>
                </form>
        )
    }
}
