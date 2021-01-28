import React, {useState} from "react";
import { Component } from "react";
import cartStore from "../stores/cartStore/cartStore";

class Listitems extends Component {  


    listed = () => {
        
         return this.props.docs.map((item) => 
   
        
        <div className="card" key={item.id}>
             
        {/* #TODO aq gaasworebda pop up sadac video irtveba  */}
            <div className="card-image"> 
                <img  src={item.img} alt={item.title}/>
                {/* <span className="card-title ">{item.title}</span> */}
                <a onClick={()=>{
                    cartStore.dispatch({
                        type: "ADD_TO_CART",
                        item: item
                    })
                }
                } className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>

            <div className="card-content">
                <p className="truncate">{item.desc}</p>
                <p><b className="pink-text">GEL  {item.price}</b></p>
            </div>
        </div>
        );
    
    }
    
    
render (){ 
    return  <div className="box">
          {this.listed()}
    </div>  
            }
    }
    
export default Listitems;