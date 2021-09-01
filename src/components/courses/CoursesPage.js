/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
	componentDidMount() {
		this.props.actions.loadCourses().catch((error) => {
			alert('Loading courses failed: ' + error);
		});

		this.props.actions.loadAuthors().catch((error) => {
			alert('Loading authors failed: ' + error);
		});
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses} />
			</>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		courses:
			state.authors.length === 0
				? []
				: state.courses.map((course) => {
						return {
							...course,
							authorName: state.authors.find(
								(author) => author.id === course.authorId
							).name,
						};
				  }),
		authors: state.authors,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
