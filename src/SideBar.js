import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Nav, Navbar, Input, Label, Tab, i } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IconName, AiOutlineCheckSquare, AiFillCheckSquare, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiCheckbox, BiCheckboxMinus } from "react-icons/bi";
import { GoTrashcan } from "react-icons/go";
import { GrCheckbox, GrAddCircle, GrTable } from "react-icons/gr";
import { IoIosCheckbox } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";

import logo from './logo.svg';
import './App.css';
import { InputGroup } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { TabContainer } from 'react-bootstrap';
import "./SideBar.css";


function MySideBar() {
    return (

        <div id ="aside">
            
            <div className="d-grid gap-2">
                <Button variant="light" size="lg">
                    All
                </Button>

            </div><div className="d-grid gap-2">
                <Button variant="light" size="lg">
                    Favorites
                </Button>

            </div><div className="d-grid gap-2">
                <Button variant="light" size="lg">
                    LastSeen
                </Button>

            </div><div className="d-grid gap-2">
                <Button variant="light" size="lg">
                    SeenLastMonth
                </Button>

            </div><div className="d-grid gap-2">
                <Button variant="light" size="lg">
                    Unseen
                </Button>
            </div>
            </div>
    )
}

export default MySideBar;