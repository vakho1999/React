import React from "react";
import MovieService from "../services/MovieService";
import { Navigate, Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Redirect: false  ,
      data: [],
    };
    // this.history = useNavigate();
    this.renderItems = this.renderItems.bind(this);
  }
  RedirectPage = ()=>{
    window.location.href = this.state.Redirect; 
    return null;
    // return <Link to={{ pathname: this.state.Redirect }} />

  }
  onClickIcon = (e) => {
      
      this.setState((prevState)=>{
        console.log(e.target)
          return {
            ...prevState,
            Redirect : e.target.id
          }
      })
  }

  renderItems = () => {
    console.log(this.state)
    
    return  this.state.data.map((item,index)=>{
        return <div key={index}  className="trailer-list-item-cont fade-ready col-sm-3 width-fifth-lg width-thirth-sm width-half-sm">
        <div  className="trailer-list-item">
          <div onClick={this.onClickIcon}   className="trailer-cover">
            <div onClick={this.onClickIcon}  className="action-buttons">
              <svg
                width="26"
                height="33"
                className="svg-icon svg-icon--pause"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                
                  d="M0 0h8.3v33H0V0zM17 0h8.2v33h-8.3V0z"
                  fill="#FFF"
                ></path>
              </svg>
              <svg
                width="22"
                height="33"
                className="svg-icon svg-icon--play"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={item.imdbUrl}
                  d="M21.3 14.5L2 .3C2 0 1.6 0 1.4 0 .6 0 0 .8 0 1.7v29.6c0 1 .6 1.7 1.4 1.7.3 0 .5-.1.7-.3l19.2-14.2c.4-.5.7-1.2.7-2s-.3-1.5-.7-2z"
                  fill="#FFF"
                ></path>
              </svg>
            </div>
            <div className="trailer-gradient-cover"></div>
            <img
            id={item.imdbUrl}
            alt={item.name}
              src={item.image}
              title={item.name}
            />
          </div>
          <span className="trailer-info"><div className="trailer-title"></div><div className="trailer-title trailer-title-secondary">{item.name}</div></span>
        </div>
      </div>
    })
        
  }

  componentDidMount() {
    
    const Api = new MovieService();
    Api.getMoviesByDefault().then((res) => {
      // if(res.status == 200){

      var data = res.data;
      data = data.map((item) => {
        return {
          name: item.originalName,
          imdbUrl: item.imdbUrl,
          image: item.posters.data["240"],
        };
      });

      this.setState((prevState) => {
        return {data:data}
      });

      // }
    });
  }

  render() {
    return (
        <div className="top-trailers all-trailers user-lists-container pv-30">
      <div className="container">
        <div className="row movie-list-row">
          {/* list items */}
          {this.state.Redirect && this.RedirectPage()}
          {this.renderItems()}
          
        </div>
      </div>
      </div>
    );
  }
}
export default HomePage;
