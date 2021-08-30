import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

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
			title: '',
		},
	};

	//By using arrow funcions we don't have to bind it to the component
	handleChange = (event) => {
		const course = { ...this.state.course, title: event.target.value };
		this.setState({ course: course });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(courseActions.createCourse(this.state.course));
		// alert(this.state.course.title);
	};

	render() {
		//By setting onSubmit in the form instead of the 'Save' button, we ensure
		//an usability good practice because users can submit by clicking the save button
		//or hitting 'Enter' key.
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input
					type='text'
					onChange={this.handleChange}
					value={this.state.course.title}
				/>

				<input type='submit' value='Save' />
				{this.props.courses.map((course) => (
					<div key={course.title}>{course.title}</div>
				))}
			</form>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		courses: state.courses,
	};
}

export default connect(mapStateToProps)(CoursesPage);
