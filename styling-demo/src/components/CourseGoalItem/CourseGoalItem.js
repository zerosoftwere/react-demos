import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from '../UI/ListGroupItem';

const CourseGoalItem = ({item, onClick}) => {
  return (
    <ListGroupItem onClick={onClick}>{item}</ListGroupItem>
  )
}

CourseGoalItem.propTypes = {
  item: PropTypes.string.isRequired
}

export default CourseGoalItem;