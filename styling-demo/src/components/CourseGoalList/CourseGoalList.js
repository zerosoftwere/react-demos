import React from 'react';
import PropTypes from 'prop-types';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import ListGroup from '../UI/ListGroup';

const CourseGoalList = ({items, onRemoveCourse}) => {
  const itemClickHandler = (index) => onRemoveCourse(index);
  return (
    <ListGroup>
      {items.map((item, i) => <CourseGoalItem key={i} item={item} onClick={() => itemClickHandler(i)}/>)}
    </ListGroup>
  )
}

CourseGoalList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

export default CourseGoalList;