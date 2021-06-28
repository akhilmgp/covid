import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

function Counter(props) {
    // update with object destructuring 
    let {lastupdatedtime, confirmed, active,recovered, deaths } = props.counterVariables;
    
        
    return (
     
        <React.Fragment>
          
        <div className="content-heading">Details of India</div>
        <div className="update-date">Last updated:{lastupdatedtime}</div>
        <div className="row mt-5">
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="details-card">
              <div className="card-heading">
                <div className="card-heading">TOTAL CONFIRMED</div>
                {confirmed ? 
                (<div className="card-count">{confirmed}</div>):
                (<Skeleton variant="rect" className="text-skeleton"width={200} height={15} />)
                }
              </div>
            </div>
          </div>
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="details-card">
              <div className="card-heading">
                <div className="card-heading">ACTIVE</div>
                {active ? 
                (<div className="card-count">{active}</div>):
                (<Skeleton variant="rect" className="text-skeleton"width={200} height={15} />)
                }
              </div>
            </div>
          </div>
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="details-card">
              <div className="card-heading">
                <div className="card-heading">RECOVERED</div>
                {recovered ? 
                (<div className="card-count">{recovered}</div>):
                (<Skeleton variant="rect" className="text-skeleton"width={200} height={15} />)
                }
              </div>
            </div>
          </div>
          <div className="col-lg mb-4 col-sm-6 col-md-6">
            <div className="details-card">
              <div className="card-heading">
                <div className="card-heading">DEATHS</div>
                {deaths ? 
                (<div className="card-count">{deaths}</div>):
                (<Skeleton variant="rect" className="text-skeleton"width={200} height={15} />)
                }
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
       
    )
}

export default Counter
