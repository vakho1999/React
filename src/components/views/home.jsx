import React from "react";
import database from "../Initfirebase/firebase";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../Data/jawelery';
import {Button} from "react-bootstrap";

import { Link } from 'react-router-dom';
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Button variant="danger" onClick={() => database.auth().signOut()}> Sign out</Button></li>
                    </ul>
                </div>
            </nav>  
    )
}
const Home = () => {
    const listItems = data.map((item) => 
    <>
   
    <div className="card" key={item.id}>
        <div className="card-image">
            <img src={item.img} alt={item.title}/>
            <span className="card-title">{item.title}</span>
            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
        </div>

        <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: {item.price}$</b></p>
        </div>
    </div>
  
    </>
    
    );
  return (
    <>
     <Navbar/>
     <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">
            {listItems}  
        </div>
    </div>
     
    </>
  );
};

export default Home;