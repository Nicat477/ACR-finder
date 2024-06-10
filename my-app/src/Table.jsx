
import { Data } from './data';
import { useState } from 'react';
const Table = ({ data }) => {
  
    return (
      
      
      <table>
        <thead>
          <tr>
            <th>S/S</th>
            <th>Qısaltma</th>
            <th>Açıqlaması</th>
            <th>Missiya</th>
            
          </tr>
          </thead>
          <tbody>
          {data.map((item,index) => (
            <tr key={item.id}>
              <td>{index+1}</td>
              
              <td>
              {item.akronim}
              </td>
              <td>{item.aciqlama}</td>
              <td>{item.missiya}</td>
              
            </tr>
          ))}
          </tbody>
          
        
      </table>
    );
  };
  
  export default Table;