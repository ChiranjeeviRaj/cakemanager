import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import NewCake from './NewCake';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

class CakeList extends Component{

    constructor(props) {
        super(props);
        this.state = {cakes: [], isLoading: true};
      }

    componentDidMount() {
        this.setState({isLoading: true});
        this.getCakes();
      }

      getCakes = () => {
        fetch('cakes')
          .then(response => response.json())
          .then(data => this.setState({cakes: data}))
          .catch(err=>console.error(err));
      }

    addCake(cake) {
        fetch('cakes/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(cake)
        })
        .then(res=>this.getCakes())
        .catch(err=>console.error(err));
    }

      render() {
        const {cakes, isLoading} = this.state;

        const cakeList = [
                    {Header: "Image",
                          Cell: (cake) => {
                            return <img height={60} width={60} src={cake.original.imageURL} alt={cake.original.name}/>
                          }},
            {Header:'Name', accessor: 'name'},
            {Header:'Description', accessor: 'description'},
        ];

        return(
                <div>
                 <NewCake addCake={this.addCake} getCakes={this.getCakes} />
                    <h3>Cakes Store</h3>
                    <div>
                       <ReactTable data={this.state.cakes} columns={cakeList} minRows={0} />
                    </div>
                 </div>

                );

        }
}

export default CakeList;
