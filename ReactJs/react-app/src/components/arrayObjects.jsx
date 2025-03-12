import usersData from '../data/data'

const ArrayObjects=()=>{
    
const users = usersData;
return (
    <>
      {users.map((u, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {u.name}</p>
          <p><strong>Username:</strong> {u.username}</p>
          <p><strong>City:</strong> {u.address.city}</p>
          <hr />
        </div>
      ))}
    </>
  );

}
      

 

export default ArrayObjects;