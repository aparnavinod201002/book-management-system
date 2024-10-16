import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, editBook } from '../Redux/Slice/BookSlice'; 

function ViewCard() {
  const books = useSelector((state) => state.BookReducer.books);
  const dispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  const handleDelete = (bookTitle) => {
    dispatch(deleteBook(bookTitle));
  };

  const handleEdit = (book) => {
    setCurrentBook(book);
    setEditedBook(book);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    dispatch(editBook(editedBook));
    setShowEditModal(false);
  };

  return (
    <div className="container mt-3">
      <Row>
        {
          books && books.length === 0 ? (
            <div className='d-flex align-items-center m-5 p-5'>
              <img 
                src="https://png.pngtree.com/png-vector/20240514/ourmid/pngtree-a-beautiful-girl-is-happily-reading-book-png-image_12454376.png" 
                alt="" 
                className="img-fluid"
              />
              <p className='fw-bolder text-danger p-5' style={{fontSize:"50px"}}>No books available. Please add some books.</p>
            </div>
          ) : (
            books.map((book, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4"> {/* Responsive column sizes */}
                <Card className="p-3 bg-danger h-100"> {/* Full height card for better alignment */}
                  <Card.Img 
                    variant="top" 
                    src={book.img} 
                    alt="Book cover" 
                    className="img-fluid" 
                  />
                  <Card.Body>
                    <Card.Title className='text-light'>{book.title}</Card.Title>
                    <Card.Text className='text-light'>
                      Author: {book.author}
                    </Card.Text>
                    <Card.Text className='text-light'>
                      {book.about}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between">
                    <Card.Link 
                      href="#" 
                      style={{ textDecoration: "none" }} 
                      className='fw-bolder text-light'
                      onClick={() => handleEdit(book)}
                    >
                      Edit
                    </Card.Link>
                    <Card.Link 
                      href="#" 
                      style={{ textDecoration: "none" }} 
                      className='fw-bolder text-light'
                      onClick={() => handleDelete(book.title)}
                    >
                      Delete
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )
        }
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editedBook.title}
                onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={editedBook.author}
                onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>About</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editedBook.about}
                onChange={(e) => setEditedBook({ ...editedBook, about: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={editedBook.img}
                onChange={(e) => setEditedBook({ ...editedBook, img: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewCard;
