import React from "react";
import database from "../Initfirebase/firebase";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
// import data from '../Data/jawelery';
// import Store from '../../contexts/store';
import {Button} from "react-bootstrap";
import useFirestore from "../hooks/usefirestore";
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import Listitems from "./listItems";
import cartStore from "../stores/cartStore/cartStore"
import {Provider,connect} from 'react-redux';
import Cart from './cart';
 

const Home = () => {

    const {docs} = useFirestore('store');
    // const {path} = useRouteMatch();
    
   
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});

    
    const mapStateToProps = state => {
     return {
        items: state
    }
        
        
    }
    
    const Navbar = connect(mapStateToProps)(({items})=>{
        // const carts = cartStore.getState();
        // {console.log("logs2 : ",cartStore.subscribe(()=>{cartStore.getState()}))}
        // console.log('props',props.state)
        return(
                <nav className="nav-wrapper blue-grey ">
                      <ul className='left'>
                       <li><span data-target="slide-out" className="sidenav-trigger"><i className="material-icons ">menu</i></span></li>
                       </ul>
                    <div className="container">
                        {/* <div className="col s2">
                        <Link to="/" className="brand-logo"> <img class="responsive-img" src="VSNET.png"/></Link>
 
                        </div> */}
                       
                       
                        <ul className="right">
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="/cart">My cart</Link></li>
                            <li> {items.length > 0  && <span className="new badge">{items.length}</span>}<Link to="/cart"><i className="material-icons new badge">shopping_cart </i></Link></li>
                           
                            <li><Button variant="danger" onClick={() => database.auth().signOut()}> Sign out</Button></li>
                        </ul>
                    </div>
                </nav>  
        )
        
    }
    );

   
  return (
    <>
        <Provider store={cartStore} >
         <Navbar  />
         </Provider>
         <ul id="slide-out" className="sidenav">
            <li>
            <div className="user-view ">
            <img src="vsnet.png"  className='responsive-img' alt="vsnet" /> 
                <div style={{marginBottom:'20px',paddingBottom:'20px',paddingTop:'20px'}} className="background  container">
                <img className='boxed'  style={{width:'100%', height:'100%', borderRadius:'9%'}} src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg"/>
                </div>
                {/* <a href="#!user"><img className="circle" src="images/yuna.jpg"/></a> */}
                {/* <a href="#!name"><span className="white-text name">John Doe</span></a>
                <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a> */}
            </div></li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>

        <div className="container">
            {/* <h3 className="center">Our items</h3> */}
            
           
            {/* <div className="box"> */}
                <Switch>
                <Route exact path="/" component={() => {return  <Listitems docs={docs} />}} />
                <Route exact path="/cart" component={()=>{return  <Provider store={cartStore} > <Cart/></Provider>}} />
           
                </Switch>

            {/* </div> */}
          
               
                {/* <Store /> */}
            
        </div>
        
     
    </>
  );
};

export default Home;