import { Table, Button,Form} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { IoTvSharp } from 'react-icons/io5';
import { IconName,AiOutlineCheckSquare,AiFillCheckSquare,AiFillStar,AiOutlineStar} from "react-icons/ai";
import { BsPencilSquare} from "react-icons/bs";
import {GoTrashcan } from "react-icons/go";

function FilmScores(props) {
  return (
    <ExamTable films={props.films}></ExamTable>
  );
}

function ExamTable(props) {
  const [films, setFilms] = useState(props.films);
  const [showForm, setShowForm] = useState(false);

  function deleteExam(nome) {
    // setExams(...)   // remove exam
    setFilms(films.filter((e) => e.nome!== nome));
  }

  return (
    <>
      <Table>

        <h2>
          Filter:All
        </h2>

        <tbody>
          {
            films.map((fi) => <ExamRow exam={fi} key={fi.nome} deleteExam={deleteExam} />)//devo sempre definire una key
          }
        </tbody>
      </Table>
      {(!showForm) ? <Button onClick={() => setShowForm(true)}>+</Button> :
        <ExamForm cancel={() => setShowForm(false)} />}
    </>
  );
}

function ExamRow(props) {
  return (
    <tr><ExamData film={props.exam}/></tr>
  );
}

function ExamData(props) {
  var data = "";
  var i = 0;
  var starpieno=[false,false,false,false,false];
  for(;i<props.film.score;i++)
  {
    starpieno[i]= true;
  }
  
  if (props === undefined) {
    return;
  }
  else {
    if (props.film.date != '') {
      data = props.film.date.format('YYYY-MM-DD');
    }

    return (
      <>
        <td>
          <BsPencilSquare></BsPencilSquare>
        <Button variant='light'
    onClick={() => { props.deleteExam(props.exam) }}
  ><GoTrashcan></GoTrashcan>
        </Button>
        {props.film.nome}
            </td>

            <td>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Favorite"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
    </div>
  ))}
</Form>
            </td>

            <td>{data}</td>

        <td>
          {starpieno.map((el)=>{if(el==true)
        {
          return(<AiFillStar></AiFillStar>)
        }
        else{
          return(<AiOutlineStar></AiOutlineStar>)
        }})}
        </td>
        
      </>
    );
  }
}

function ExamActions(props) {
  return <Button variant='danger'
    onClick={() => { props.deleteExam(props.nome) }}
  ><GoTrashcan></GoTrashcan></Button>
}

function ExamForm(props) {
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <input type="text" name="nome" className="form-control" value={name}
          onChange={(event) => { setName(event.target.value.toUpperCase()) }}></input>
      </form>
      <Button onClick={props.cancel}>Cancel</Button>
    </>
  );
}

export { FilmScores };