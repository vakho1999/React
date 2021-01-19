import React, { Component } from 'react';

class Search extends Component {
  
   
    
    handleValue(e){
        // console.log(this.props)
        
        this.props.setsearchText(e.target.value)

    }

    render(){
          
        return (<form>
                    <div className="row">
                        <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <input type="text" id="autocomplete-input" onChange={this.handleValue.bind(this)} className="autocomplete"/>
                            <label for="autocomplete-input">მოძებნე ბარათი დასახელებით</label>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
         )
        
    }


}
export default Search;