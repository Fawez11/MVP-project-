import React,{Component} from "react"
import axios from 'axios'
class AddStudent extends Component{
    constructor(props){
        super(props)
        this.onChangeStudentDescripe = this.onChangeStudentDescripe.bind(this)
        this.onChangeStudentNote = this.onChangeStudentNote.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
        studentDescripe :"",
        studentNote:""


        }
    }

   onChangeStudentDescripe(e){
    this.setState({
        studentDescripe : e.target.value
    })
   }


   onChangeStudentNote(e){
    this.setState({
       studentNote : e.target.value
    })
   }
   onSubmit(e){
    e.preventDefault()
    const newStudentMange = {
      studentDescripe: this.state.studentDescripe,
        studentNote: this.state.studentNote,
      
    }
    axios.post('http://localhost:4000/storage/add', newStudentMange)
    .then(res => console.log(res.data))
    this.setState({
        studentDescripe :"",
        studentNote:""
    })
   }

    render(){
        return (
            <div>
                
            </div>
        )
    }

}

export default AddStudent