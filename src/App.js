import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';
import { FilmScores } from './ExamComponents';
import MyNavBar from './NavBar.js';
import MySideBar from './SideBar';

const fakeFilms = [
  {nome:'Pulp Fiction',favorite:true,score:5, date:dayjs('2022-03-20') },
  {nome:'21 Grams',favorite:true,score:4,date:dayjs('2022-03-11') },
  {nome:'Star Wars',favorite:false,score:0, date:'' },
  {nome:'Matrix',favorite:false,score:0,date:'' },
  {nome:'Shrek',favorite:false,score:3,date:dayjs('2022-03-21') }
  
];//è un array di oggetti

function App() {
  return (
    <div>
      <MyNavBar></MyNavBar>
      <Container fluid>
     <Row>
       <Col className='col-3' class="colonna3">
      <MySideBar></MySideBar>
      </Col>
      <Col className='col-9' class="colonna3">
      <FilmScores films={fakeFilms}></FilmScores>
      </Col>
      </Row>
      </Container>
  </div>
  );
}

export default App;
