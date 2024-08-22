import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, ListGroup, Image, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

export default function CartScreen() {
  const { id: productId } = useParams(); // useParams to get the product ID from the URL
  const location = useLocation(); // useLocation to get the location object
  const navigate = useNavigate(); // useNavigate to replace the history object

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const cart = useSelector(state => state.cart)
  const{ cartItems } = cart
  

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
      // console.log('remove:', id)
  };

  const checkoutHandler = () => {
      navigate('/login?redirect=shipping')
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant='info'>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
            <ListGroup variant='flush'>
                {cartItems.map(item => (
                  <ListGroup.Item key = {item.product}>
                      <Row>
                         <Col md={2}>
                              <Image src={item.image} alt={item.name} fluid rounded/>
                         </Col>
                         <Col md={3}>
                             <Link to={`/product/${item.product}`}>{item.name}</Link>
                         </Col>
                         <Col md={2}>
                            ${item.price}
                         </Col>
                         <Col md={2}>
                         <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                         </Col>
                         <Col md={1}>
                              <Button 
                              type='button' 
                              variant='light'
                              onClick={() => removeFromCartHandler(item.product)}>
                                < i className='fas fa-trash'></i>
                              </Button>
                         </Col>
                      </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
        )}
      <Col>

      </Col>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                  <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                  ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
              </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item className="d-flex justify-content-center">
            <Button 
              type='button' 
              className='btn btn-primary my-2'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
                PROCEED TO CHECKOUT
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}
