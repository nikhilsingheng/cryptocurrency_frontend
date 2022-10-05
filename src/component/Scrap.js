import React, { Component } from "react";
import  Axios from 'axios'
import {render} from 'react-dom'

var resulDtata=[]
class Scrap extends React.Component{
    constructor(){
        super()
        this.state={
            apiData : []

        }
    
    }
   async componentDidMount(){
       try{
        setInterval(async()=>{
            await   Axios.get('http://127.0.0.1:8000/api/cryptocurrency/')
                .then((res)=>{
                this.setState({
                    apiData : res.data.data
                })
                console.log("apiData",this.state.apiData)
            })
            
        },3000);
       }
       catch(err){
        console.log(err)
       }
      
    }
    render(){
        return(
            <div className="container ">
            <div classNameName="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
            <div className="row ">
             
             <div className="col-sm-3 mt-5 mb-4 text-gred">
                
                </div>  
                <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b> Cryptocurrency</b></h2></div>
                <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
               
               </div>
             </div>  
              <div className="row">
                  <div className="table-responsive " >
                   <table className="table table-striped table-hover table-bordered">
                      <thead>git
                          <tr>
                              <th>#</th>
                              <th>Name </th>
                              <th>Price</th>
                              <th>24h %</th>
                              <th>1h%</th>
                              <th>7d%</th>
                              <th>volume24h</th>
                             
                          </tr>
                      </thead>
                      <tbody>
                        {/* data */}
                        {this.state.apiData.map(obj=>{
                            return(
                                <tr>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>${obj.price}</td>
                                    <td>{obj.volume24h}</td>
                                    <td>{obj.one_hour_per}</td>
                                    <td>{obj.seven_day_per}</td>
                                    <td>{obj.market_cap}</td>
                                </tr>
                            )
                        })}
                          
                         
                      </tbody>
                  </table>
              </div>   
          </div> 
          </div>
          </div>
        )

    }
    
  
}
export default Scrap