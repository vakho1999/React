import React,{  useState } from "react";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
const Cart = (props) =>{
    const [show, setShow] = useState(false);
    // items = this.props.items
    // orders = () => {
    //     return 
    // }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
       
         <><ul className="collection with-header">
            
                <li className="collection-header"><h4>Your orders</h4></li>
                {props.items.map((item)=>{
     
                return <div> 
                    <li key={item.id} className="collection-item avatar">
                <img src={item.img}  className="circle"/>
                <span className="title">{item.title} * </span>
                    <br></br>
                    <br></br>
                <span>
               
                    {item.desc}

                </span>
                <p><a style={{marginLeft:'50px'}} className="waves-effect waves-light btn blue"><i className="material-icons right">local_atm</i>{item.price}</a></p>
                </li>
                </div>
            

                })}
       
        </ul>
        
               
        <>
      
            <a onClick={handleShow} className="waves-effect waves-light btn orange"><i className="material-icons right">local_atm</i>Buy</a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Payment Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="asde" />

                Payment Succeed
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
               
                </Modal.Footer>
            </Modal>
            </>

        </>
      

    )
    
}
const mapStateToProps = state => {
    return {
       items: state
   }

}
export default connect(mapStateToProps)(Cart);

