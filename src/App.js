import Header from "./Header"
import "./Header.css"

function App() {
  return (
    <div>
      <Header/>
      <button className="add-btn">Add</button>
      <div className="grid-container">
        <span className="grid-item name-heading">Name</span><br/>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      <div className="grid-container">
        <span className="grid-item">Tom</span><br/>
        <span className="grid-item">1231231321</span>
      </div>
      <div className="grid-container">
        <span className="grid-item">Jerry</span><br/>
        <span className="grid-item">1231231321</span>
      </div>
    </div>
  );
}

export default App;
