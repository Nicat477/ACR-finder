
const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>S/S</th>
            <th>Qısaltma</th>
            <th>Açıqlaması</th>
            <th>Missiya</th>
            <button>Search</button>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              
              <td><input type='text' placeholder="Write"/></td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              
            </tr>
          ))}
          </tbody>
          
        
      </table>
    );
  };
  
  export default Table;