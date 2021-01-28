import React,{useState } from "react";
import { Component } from "react";
import database from "../components/Initfirebase/firebase";


class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            '2':3
        }
      }
     store = database.database().ref('store').on('value', snapshot => { console.log(snapshot)  })
  
    render(){return (<div>wow</div>);}

}

export default Store;

// export const store = () => {

//     const [store,setStore] = useState(
        
//     );



// }