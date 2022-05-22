import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import Carousel, { CarouselItem } from "./carousel"

import './isi.css';
// import { Carousel } from "bootstrap";

function Isi(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <body className='App-body'>
          <p></p>
          <a href="/">Back to top menu</a>
          <p></p>
          <p>Name: Muhammad Rizky Utomo</p>
          <p>About me:</p>
          <p>As a learner for life, I always seek more and more ways to search for knowledge in the field I expertise and experience of working in the professional world. A disciplined and hardworking person, I expect myself to apply all the skills I have obtained in the form of contributions towards organizations that I have interest with.</p>
          <p>Education:</p>
          <Carousel>
            <CarouselItem>SMP Tara Salvia (2015 - 2018)</CarouselItem>
            <CarouselItem>SMAN 4 Tangerang Selatan (2018 - 2021)</CarouselItem>
            <CarouselItem>S1 Teknik Komputer Universitas Indonesia (2021 - )</CarouselItem>
            <CarouselItem>SD Tara Salvia (2009 - 2015)</CarouselItem>
          </Carousel>
          <p>Skills:</p>
          <ul>
            <li>C Programming</li>
            <li>Python Programming</li>
            <li>Microsoft Office</li>
            <li>HTML and CSS</li>
          </ul>
          <Button className="buttons" onClick={handleShow}>Show student activities as a college student</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
              <Modal.Header closeButton>
                Student Activities:
              </Modal.Header>
              <Modal.Body>
                <ul>
                  <li>EXERCISE FTUI (2022 - )</li>
                  <li>IME FTUI (2022 - )</li>
                  <li>FUSI FTUI (2022 - )</li>
                </ul>
              </Modal.Body>
            </Modal.Dialog>
          </Modal>
          <div>
            <p>Contacts:</p>
            <div class="col-5">
              <Button className="buttons"><a href='https://www.instagram.com/mrizkyutomo/' className="link-button">Instagram</a></Button>
              <Button className="buttons"><a href='https://www.linkedin.com/in/muhammad-rizky-utomo-213375176' className="link-button">Linkedin</a></Button>
              <Button className="buttons"><a href='mailto:rizkyutomo@gmail.com' className="link-button">Gmail</a></Button>
              <Button className="buttons"><a href='mailto:muhrizkyutomo@outlook.com' className="link-button">Outlook</a></Button>
            </div>
          </div>
          <p></p>
        </body>
      </div>
    );
}

export default Isi;