import React, { Component } from "react";

import SkyLight from "react-skylight";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import IconButton from '@material-ui/core/IconButton';
import BorderColor from '@material-ui/icons/BorderColor';

class EditCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: this.props.car.brand,
      model: this.props.car.model,
      color: this.props.car.color,
      fuel: this.props.car.fuel,
      year: this.props.car.year,
      price: this.props.car.price
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //get values from state
    const car = {
      brand: this.state.brand,
      model: this.state.model,
      color: this.state.color,
      fuel: this.state.fuel,
      year: this.state.year,
      price: this.state.price
    };


    //pass it to the function via props
    this.props.updateCar(this.props.link,car);
    this.simpleDialog.hide();
    
  };

  render() {
    const style = {
      margin: 12
    };
    const popUpStyles = {
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    }

    return (
      <div>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Edit car"
          dialogStyles={popUpStyles}
        >
          <TextField
            name="brand"
            hintText="Brand"
            floatingLabelText="Brand"
            value={this.state.brand}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="model"
            hintText="Model"
            floatingLabelText="Model"
            value={this.state.model}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="color"
            hintText="Color"
            floatingLabelText="Color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="fuel"
            hintText="fuel"
            floatingLabelText="fuel"
            value={this.state.fuel}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="year"
            hintText="year"
            floatingLabelText="year"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            name="price"
            hintText="price"
            floatingLabelText="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <RaisedButton label="Save Edit" primary={true} style={style}  onClick={this.handleSubmit}/>
        </SkyLight>
        <IconButton

          onClick={() => this.simpleDialog.show()}
        >
        <BorderColor/>
        </IconButton>
      </div>
    );
  }
}

export default EditCar;
