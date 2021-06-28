import {Navbar} from 'react-bootstrap';
import { MdLocalHospital } from "react-icons/md";
import {React, useState} from 'react'

function Header() {
  const [name, changeName] = useState("Covid 19 Dashboard");
  return (
    <div>
      <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
              <MdLocalHospital className="main-logo"/>
                {name}
              </Navbar.Brand>
      </Navbar>
     
    </div>
  )
}

export default Header
