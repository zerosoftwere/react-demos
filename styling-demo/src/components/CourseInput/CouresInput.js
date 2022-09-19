import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../UI/Button';
import Input from '../UI/Input';
import FormGroup from '../UI/FormGroup';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin :20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  padding: 20px;
  border-radius: 12px;
`;

const CourseInput = ({onAddCourse}) => {
  const [valid, setValid] = useState(true);
  const inputRef = useRef();

  const handleSubmit = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      onAddCourse(value);
      inputRef.current.value = '';
    } else {
      setValid(false);
    }
  };

  const handleChange = event => setValid(!!event.target.value.trim())

  return (
    <Wrapper>
      <FormGroup>
        <label style={{color: valid ? 'black' : 'red'}}>Course Goal</label>
        <Input ref={inputRef} onChange={handleChange} valid={valid}/>
      </FormGroup>
      <FormGroup className='form-group'>
        <Button onClick={handleSubmit} primary>Add Goal</Button>
      </FormGroup>
    </Wrapper>
  );
}

CourseInput.propTypes = {
  onAddCourse: PropTypes.func.isRequired
}

export default CourseInput;