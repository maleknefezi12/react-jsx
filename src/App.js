import logo from './logo.svg';
import './App.css';
import {Button,Form}  from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componants/navbar/navbar';


function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <fieldset>

     <Form className="form-contact">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" ></Form.Check>
  </Form.Group>
  
  <Button  type="submit" variant="flat" size="xxl" className='btnnn'>
    Submit
  </Button>

  
</Form>
      </fieldset>
    </div>
  

  );
}



export default App;
