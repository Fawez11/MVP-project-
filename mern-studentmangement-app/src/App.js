import React,{Component} from 'react';

import './App.css';
import AddStudent from './component/AddStudent.component';
import EditStudent from './component/EditStudent.component';
import StudentMange from './component/StudentMange.component';

class App extends Component {
  render(){
    return (
      
      <div className="container"   >
        <h3>Student Managment</h3>
        <form>
  <label>
    student Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="submit" />
</form>
<form>
  <label>
    student degree:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="submit" />
</form>


        
        <StudentMange/>
        <EditStudent/>
        <AddStudent/>
      </div>
  
     
    )
  }
}

export default App;
