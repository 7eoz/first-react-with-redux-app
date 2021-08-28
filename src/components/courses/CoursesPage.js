import React from 'react'

class CoursesPage extends React.Component {
    //instead of using the constructor...
    // constructor(props) {
        // super(props)
        // this.state = {
        //     course: {
        //         title: ""
        //     }
        // }
        // this.handleChange = this.handleChange.bind(this)
    // }

    //...We can simply instanciate the state as a less verbose option
    state = {
        course: {
            title: ""
        }
    }

    //By using arrow funcions we don't have to bind it to the component
    handleChange = event => {
        const course = {...this.state.course, title: event.target.value}
        this.setState({course: course})
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(this.state.course.title)
    }

    render() {
        //By setting onSubmit in the form instead of the 'Save' button, we ensure
        //an usability good practice because users can submit by clicking the save button
        //or hitting 'Enter' key.
        return <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" 
                       onChange={this.handleChange} 
                       value={this.state.course.title}/>

                <input type="submit" value="Save" />
               </form>
    }
}

export default CoursesPage