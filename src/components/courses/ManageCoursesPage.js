import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';

function ManageCoursesPage({ courses, authors, loadCourses, loadAuthors }) {
	useEffect(() => {
		if (courses.length === 0) {
			loadCourses().catch((error) => {
				alert('Loading courses failed: ' + error);
			});
		}
		if (authors.length === 0) {
			loadAuthors().catch((error) => {
				alert('Loading authors failed: ' + error);
			});
		}
	}, []);

	return (
		<>
			<h2>Manage Course</h2>
		</>
	);
}

ManageCoursesPage.propTypes = {
	authors: PropTypes.array.isRequired,
	courses: PropTypes.array.isRequired,
	loadCourses: PropTypes.func.isRequired,
	loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		courses: state.authors,
		authors: state.authors,
	};
}

const mapDispatchToProps = {
	loadCourses,
	loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
