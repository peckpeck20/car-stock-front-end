import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import alert
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import {CSVLink, CSVDownload} from 'react-csv';

import AddCar from './AddCar';
import EditCar from './EditCar';

export default class Carlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }

  fetchCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then(res => res.json())
      // .then(resData => console.log(resData._embedded.cars));
      .then(resData => {
        this.setState({ cars: resData._embedded.cars });
        console.log("fetched");
      });
  };

  deleteCar = value => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch(value, { method: "DELETE" })
            .then(res => {
                this.fetchCars()
                toast.success("Car Deleted", {
                    position: toast.POSITION.TOP_CENTER
                  });
            });
          }
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    })
  };

  addCar = (newCar) => {
    fetch('https://carstockrest.herokuapp.com/cars', { 
      method: 'POST',
      headers : {'Content-Type' : 'application/json'},
     body : JSON.stringify(newCar) 
    })
    .then(res => {
        this.fetchCars()
        toast.success("Car added", {
            position: toast.POSITION.TOP_CENTER
          });
    });
  }
  
  updateCar = (link,editCar) => {
    fetch(link, { 
      method: 'PUT',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(editCar) 
    })
    .then(res => {
        this.fetchCars()
        toast.success("Car updated", {
            position: toast.POSITION.TOP_CENTER
          });
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.fetchCars();
  }

  render() {
    //   const carRows =
    //   this.state.cars.map((value,index) =>
    //     <tr key={index}>
    //       <td>{index}</td>
    //       <td>{value.brand}</td>
    //       <td>{value.model}</td>
    //       <td>{value.color}</td>
    //       <td>{value.fuel}</td>
    //       <td>{value.year}</td>
    //       <td>{value.price}</td>
    //     </tr>)

    return (
      <div>
        <h3>My Cars</h3>
        {/* <table className='table'>
            <tbody>
                {carRows}
            </tbody>
        </table> */}
        <AddCar addCar={this.addCar} />
        <CSVLink data={this.state.cars} >Download CSV</CSVLink>
        <CSVDownload data={this.state.cars} target="_blank" />

        <ReactTable
          data={this.state.cars}
          columns={[
            {
              columns: [
                {
                  Header: "brand",
                  accessor: "brand"
                },
                {
                  Header: "model",
                  accessor: "model"
                },
                {
                  Header: "Color",
                  accessor: "color"
                },
                {
                  Header: "Fuel",
                  accessor: "fuel"
                 },
                {
                  Header: "Year",
                  accessor: "year"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                  sortable:false,
                  filterable:false,
                  Header: "Delete",
                  accessor: "_links.self.href",
                  Cell: ({ value }) => (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteCar(value);
                      }}
                    >
                      delete
                    </button>
                  )
                },
                {
                  sortable:false,
                  filterable:false,
                  Header: "Edit",
                  accessor: "_links.self.href",
                  Cell: ({ row,value }) => (
                    <EditCar link={value} car={row} updateCar={this.updateCar}/>
                  )
                }
              ]
            }
          ]}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <ToastContainer  autoClose={1500} />
      </div>
    );
  }
}
