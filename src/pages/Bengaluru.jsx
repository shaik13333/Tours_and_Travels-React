import React,{useState, useEffect} from "react";
import cardsData from "./cardsss";
import axios from "axios"
import "../pages/Bengaluru1.css";
import { Link } from "react-router-dom";

export default function Bengaluru(){
 let[state,setState] = useState([]);
 useEffect(()=>{
  axios.get("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru")
  .then(response=>{
    setState(response.data);
  })
 },[state])
    
    return (
      <>
        <div id="container12" style={{ width: "1298px", margin: "auto" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "500", marginTop: "119px", marginBottom: "5px" }}>Explore all adventures</h1>
          <p style={{ fontSize: "25px", marginBottom: "22px" }}>Here's a list of places that you can explore in the city</p>

          <div id="filters_bar" style={{ display: "flex", gap: "30px", borderTop: "0.1px solid #00000059", borderBottom: "0.1px solid #00000059", padding: "32px 0px" }}>
            <div id="first" style={{ display: "inline", borderRight: "1px solid", paddingRight: "22px", marginLeft: "18px" }}>Filters:</div>
            <div id="second" style={{ display: "inline" }}>
              <span style={{ border: "1px solid #00000054", borderRadius: "5px", padding: "7px 10px" }}>Filter By Duration (Hours)</span>
              <span style={{ borderRight: "1px solid", padding: "10px 18px" }}>Clear</span>
            </div>
            <div id="third" style={{ display: "inline" }}>
              <span style={{ border: "1px solid #00000054", borderRadius: "5px", padding: "7px 10px" }}>Add Category</span>
              <span style={{ borderRight: "1px solid", padding: "10px 18px" }}>Clear</span>
            </div>
            <div id="fourth" style={{ display: "inline" }}>
              <span style={{ border: "1px solid #00000054", borderRadius: "5px", padding: "7px 10px" }}>Search Adventures</span>
              <span style={{ borderRight: "1px solid", padding: "10px 18px" }}>Clear</span>
            </div>
          </div>

          <div id="cardsCont">
            {state.map((v, ind) => (
              <div id="card" key={ind} style={{ border: "1px solid #e0e0e0", borderRadius: "10px", overflow: "hidden", textAlign: "center", padding: "10px" }}>
                <Link to={"/bengSubPage"}>
                  <img src={v.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                </Link>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "96px", padding: "0px 10px" }}>
                  <h5 style={{ fontSize: "20px", marginTop: "11px" }}>{v.name}</h5>
                  <p style={{ fontSize: "16px", marginTop: "14px" }}>{v.costPerHead}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "96px", padding: "0px 10px" }}>
                  <h5 style={{ fontSize: "20px", marginTop: "11px" }}>Duration</h5>
                  <p style={{ fontSize: "16px", marginTop: "14px" }}>{v.duration} Hours</p>
                </div>
                <div id="categ" style={{ }}>{v.category}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

