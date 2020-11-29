import './App.css';
import { Component } from 'react';
import Courses from './course'


class Course extends Component{

  state = {
      courseList:[
          {
          courseId:"J001",
          courseName:"java",
          fees:"1000"
          },

          {
            courseId:"J002",
            courseName:"jS",
            fees:"1000"
          },
          {
            courseId:"M001",
            courseName:"ML",
            fees:"25000"
          }
        ]
    }

  deleteCourse = (courseId) => {

      let clist = this.state.courseList.filter((course) => { return course.courseId !== courseId })
      this.setState({ courseList: clist });
  }

  render() {
  
        return <div className="jumbotron">
            {this.state.courseList.map(course => (
            <div><h4><Courses key={course.courseId} courseDetails={course} deleteC={this.deleteCourse}/></h4></div>
            ))}  
            </div>  
        
    }
 
}


export default Course;
