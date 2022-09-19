import CourseInput from './components/CourseInput/CouresInput';
import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import { useState } from 'react';
import Container from './components/UI/Container';

function App() {
  const [items, setItems] = useState([
    'Do all exercises',
    'Finish the course'
  ]);

  const onAddCourse = item => setItems([...items, item]);
  const onRemoveCourse = index => setItems(items => items.filter((_, i) => i !== index));

  return (
    <Container>
      <CourseInput onAddCourse={onAddCourse}/>
      <CourseGoalList items={items} onRemoveCourse={onRemoveCourse}/>
    </Container>
  );
}

export default App;
