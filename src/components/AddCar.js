import React, { Component } from "react";
import SkyLight from "react-skylight";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class AddCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      model: "",
      color: "",
      fuel: "",
      year: 0,
      price: 0
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
    const newCar = {
      brand: this.state.brand,
      model: this.state.model,
      color: this.state.color,
      fuel: this.state.fuel,
      year: this.state.year,
      price: this.state.price
    };


    //pass it to the function via props
    this.props.addCar(newCar);
    this.simpleDialog.hide();
    
  };

  render() {
    const style = {
      margin: 12
    };

    return (
      <div>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="What kind of car would you like to add"
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

          {/* <button onClick={() => this.props.addCar()}>Save Car</button> */}
          <RaisedButton label="Save car" primary={true} style={style}  onClick={this.handleSubmit}/>
        </SkyLight>
        <button
          className="btn btn-info"
          onClick={() => this.simpleDialog.show()}
        >
          Add car!
        </button>
      </div>
    );
  }
}

export default AddCar;
