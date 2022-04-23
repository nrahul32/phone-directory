import Header from "./Header"
import "./Header.css"

function ShowContacts() {
  let contacts = [
    {
      id: 1,
      name: "Tom",
      phone: 1231231231
    },
    {
      id: 2,
      name: "Jerry",
      phone: 1231231232
    }
  ];

  let deleteHandler = function(message){
    alert(message);
  }

  return (
    <div>
      <Header heading="Phone Directory"/>
      <button className="add-btn btn">Add</button>
      <div className="grid-container">
        <span className="grid-item name-heading">Name</span><br/>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
        contacts.map(contact => {
          return <div key={contact.id} className="grid-container">
          <span className="grid-item">{contact.name}</span><br/>
          <span className="grid-item">{contact.phone}</span>
          <span className="grid-item">
            <button className="btn" onClick={deleteHandler.bind(this, "Delete clicked")}>Delete</button></span>
        </div>;
        })
      }
    </div>
  );
}

export default ShowContacts;
