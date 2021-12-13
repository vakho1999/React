import React from "react";

const ChildContainer = (props) => {

    const renderMovies = () => {
        console.log(props.data)
        return props.data.map((item,index)=>{
            return  <div key={index} className="movie-list-item-cont col-sm-3 width-fifth-lg width-thirth-sm width-half-sm full-width-xs mobile-two-column movie-with-poster">
            <div className="movie-list-item">
              <div className="movie-content">
                <div className="movie-cover-container flex flex--direction-column">
                  <span className="movie-cover">
                    <div className="movie-with-poster-movie-rating">
                      <div className="imdb-rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="16"
                          className="svg-icon svg-icon--imdb-original"
                          fill="none"
                        >
                          <path
                            fill="#EEC924"
                            d="M0 2C0 .9.91 0 2.03 0h22.94C26.09 0 27 .9 27 2v12c0 1.1-.91 2-2.03 2H2.03C.91 16 0 15.1 0 14V2z"
                          ></path>
                          <path
                            fill="#231F1E"
                            d="M4.76 12.28H2.6V3.7h2.15v8.57zm7.94 0h-1.82V7.47l-.89 4.8H8.67l-.91-4.8v4.8H5.83V3.72H8.6l.72 4.05.5-4.05h2.9v8.57zm1.14 0V3.7h2.4c1.43 0 1.77.14 2.18.42.4.28.6.7.6 1.27v5.18c0 .53-.18.95-.56 1.25-.39.3-.85.44-2.21.44h-2.41zm2.89-1.8V5.46c0-.42-.47-.38-.83-.38v5.76c.37 0 .83.05.83-.36zm5.04 1.36c-.15-.07-.28.45-.28.45h-1.77V3.7h2.2v1.96a2.1 2.1 0 0 1 1.43-.6c.6.04 1.38.46 1.33 1.18v4.99c0 .35-.16.63-.48.83a2.2 2.2 0 0 1-1 .14c-.52 0-1.28-.31-1.43-.37zm.74-1.04V6.48c0-.21-.1-.31-.3-.31-.2 0-.3.1-.3.3v4.33c0 .21.1.36.3.36.2 0 .3-.15.3-.36z"
                          ></path>
                        </svg>
                        <span className="imdb-rating-score">{item.imdb}</span>
                      </div>
                    </div>
                    <span className="geo-label">ქარ</span>
                    <a className="movie-link" href="/ka/movies/44992/Bones"></a>
                    <div className="icon-buttons flex">
                      <div className="icon-animate quick-action-button movie-plot">
                        <span className="icon-background"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon svg-icon--info"
                          width="16"
                          height="16"
                          fill="none"
                        >
                          <path
                            fill="#fff"
                            d="M9 4H7v2h2V4zM9 7H7v5h2V7z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.408 6.408 0 0 1 1.6 8c0-3.528 2.872-6.4 6.4-6.4 3.528 0 6.4 2.872 6.4 6.4 0 3.528-2.872 6.4-6.4 6.4z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <img
                      alt={item.name}
                      src={item.image}
                      title={item.name}
                    />
                    <div className="action-overlay"></div>
                    <div className="movie-year space-between">
                      <span>{item.type}</span>{item.year}
                    </div>
                  </span>
                </div>
                <div className="movie-list-item-details">
                  <div className="movie-info">
                    <div className="movie-titles">
                      <a
                        className="movie-title-geo"
                        href="/ka/movies/44992/Bones"
                      >
                        <em>{item.name}</em>
                      </a>
                    </div>
                  </div>
                  <div className="icon-animate three-dot-cont">
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="icon-background"></span>
                      <svg
                        width="3"
                        height="13"
                        className="svg-icon"
                        viewBox="0 0 3 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.5"
                          cy="1.5"
                          r="1.5"
                          transform="translate(0 10)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.5"
                          cy="1.5"
                          r="1.5"
                          transform="translate(0 5)"
                          fill="white"
                        ></circle>
                        <circle
                          cx="1.5"
                          cy="1.5"
                          r="1.5"
                          fill="white"
                        ></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
    }


  return (
    <div className="container" style={{position: 'relative'}}>
      <div style={{overflow: 'visible', width: '0px'}}>
        <div
          aria-label="grid"
          aria-readonly="true"
          className="ReactVirtualized__Grid ReactVirtualized__List"
          role="grid"
          tabIndex="0"
          style={{boxSizing: 'border-box', direction: 'ltr', height: 'auto', position: 'relative', width: '960px', willChange: 'transform', overflow: 'auto'}}
        >
          <div
            className="ReactVirtualized__Grid__innerScrollContainer"
            role="rowgroup"
            style={{width: 'auto', height: '1762px', maxWidth: '960px', maxHeight: '1762px', overflow: 'hidden', position: 'relative'}}
          >
            <div
              className="movie-list-row row fade-ready"
              style={{height: '302px', left: '0px', position: "absolute", top: '0px', width: '100%'}}
            >
            
             
              {renderMovies()}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChildContainer;