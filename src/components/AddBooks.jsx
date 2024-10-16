import { FloatingLabel, Form, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../Redux/Slice/BookSlice'; 

function AddBooks() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.BookReducer);

  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [author, setAuthor] = useState('');
  const [about, setAbout] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle the form submission
  const handleAddBook = () => {
    const existingProduct = books.find(item => item.title === title);
    if (!title || !img || !author || !about) {
      alert("Please fill missing fields");
    } else {
      if (existingProduct) {
        alert("Book Already Exists");
      } else {
        dispatch(Add({
          title,
          img,
          author,
          about,
        }));
      }
    }

    // Clear the form fields after submission
    setTitle('');
    setImg('');
    setAuthor('');
    setAbout('');

    // Close the modal
    handleClose();
  };

  return (
    <div>
      <Button className="btn btn-danger m-5 text-light" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Wrap form fields inside a responsive container */}
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="mb-3">
                <FloatingLabel controlId="floatingTitle" label="Book Title">
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={12} lg={12} className="mb-3">
                <FloatingLabel controlId="floatingImg" label="Book Image URL">
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    onChange={(e) => setImg(e.target.value)}
                    value={img}
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={12} lg={12} className="mb-3">
                <FloatingLabel controlId="floatingAuthor" label="Author">
                  <Form.Control
                    type="text"
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                  />
                </FloatingLabel>
              </Col>

              <Col xs={12} md={12} lg={12} className="mb-3">
                <FloatingLabel controlId="floatingAbout" label="About">
                  <Form.Control
                    as="textarea"
                    placeholder="About"
                    style={{ height: '100px' }}
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddBook}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddBooks;
