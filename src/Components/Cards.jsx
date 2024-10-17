import React from "react";
import "./Cards.css";
import data from "../db";
import {Link} from 'react-router-dom'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = ("");
    }
   
    render(){
        return(
            <>
                    <div className="card">
                       
                        <div className="img">
                       <Link to={"/bengaluru"}><img className="img-1" src={this.props.imgsrc} alt={this.props.alt}/></Link> 
                        </div>
                        <div className="benglore">
                            <h4 >{this.props.cityName}</h4>
                            <h6 >{this.props.place}</h6>
                        </div>

                        
                    

                    
                    

                   
                </div>
            </>
        )
    }
}
export default Card