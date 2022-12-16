import './Table.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
const  Table =()=>{
    const [datalist, updateData] = useState([     
    ]);
    
    const getData = async() =>{
            await axios.get("https://cdn.crediwatch.com/assets/json/ews_score.json").then(res=>{updateData(res.data)
        console.log(res.data);})
        }

  useEffect(()=>{
    getData();
  })

return(
    <div className='container'>
        <div className="row">
            <div className='col text-start'>
            <h3>All High Risk Medium Risk Low Risk</h3>
           
            </div>
        </div>
        <div className='center'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Financial Risk Score</th>
                    <th>Public Data Score</th>
                    <th>Private Risk Score</th>
                    <th>Overall Risk</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            datalist.map((data,index)=>{
                                return(
                                <tr key={index}>
                                    <td>{data.party_name}</td>
                                    <td>{data.financial_risks}</td>
                                    <td>{data.non_financial_risks}</td>
                                    <td>{data.private_data_risks}</td>
                                    <td>{data.score}</td>
                                </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    </div>
);
}
export default Table;