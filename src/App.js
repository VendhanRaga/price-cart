
import './App.css';

function App() {
  return (
    <div className="App">
       <Details
      tittle="FREE"
      duration="0"
      access="✓"
      user="single User"
      storage="5GB Storage"
      projects="Unlimited Public Projects"
      community="community Access"
      denied="✕"
      private="Unlimited Private Projects"
      support="Dedicated Phone Support"
      subdomain="Free Subdomain "
      status="Monthly Status Reports"
       />

<Details
      tittle="PLUS"
      duration="9"
      access="✓"
      user="single User"
      storage="5GB Storage"
      projects="Unlimited Public Projects"
      community="community Access"
      denied="✓"
      private="Unlimited Private Projects"
      support="Dedicated Phone Support"
      subdomain="Free Subdomain "
      status="❌Monthly Status Reports"
       />

<Details
      tittle="PRO"
      duration="49"
      access="✓"
      user="single User"
      storage="5GB Storage"
      projects="Unlimited Public Projects"
      community="community Access"
      denied="✓"
      private="Unlimited Private Projects"
      support="Dedicated Phone Support"
      subdomain="Free Subdomain "
      status="Monthly Status Reports"
       />
   
    </div>
  );
}

export default App;

function Details(props){
  return(
<div className="card">
  <h6>
    <p>{props.tittle}</p>
  </h6>
  <h1>
    <p>$ {props.duration}/mounth</p>
  </h1>
  <hr></hr>
  <h4>
    <span>{props.access} {props.user}</span>
  </h4>
  <h4>
    <span>{props.access} {props.storage}</span>
  </h4>
  <h4>
    <span>{props.access} {props.projects}</span>
  </h4>
  <h4>
    <span>{props.access} {props.community}</span>
  </h4>
  <h4>
    <span>{props.denied} {props.private}</span>
  </h4>
  <h4>
    <span>{props.denied} {props.support}</span>
  </h4>
  <h4>
    <span>{props.denied} {props.subdomain}</span>
  </h4>
  <h4>
    <span>{props.denied} {props.status}</span>
  </h4>
  <button className='btn'>BUTTON</button>

</div>
  )
};