import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { listProducts } from '../actions/productActions';

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products, page, pages } = productList;

    const navigate = useNavigate();
    const location = useLocation();

    let keyword = location.search;

    useEffect(() => {
        dispatch(listProducts(keyword));
    }, [dispatch, keyword]);

    return (
      <div>
      {!location.search && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
          <Loader />
      ) : error ? (
          <Message variant='danger'>{error}</Message>
      ) : (
          <div>
              {/* Display a message if no products are found */}
              {products.length === 0 ? (
                  <Alert variant='warning'>
                      No products found matching your search criteria.
                  </Alert>
              ) : (
                  <>
                      <Row>
                          {products.map(product => (
                              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                  <Product product={product} />
                              </Col>
                          ))}
                      </Row>
                      <Paginate page={page} pages={pages} keyword={location.search} />
                  </>
              )}
          </div>
      )}
  </div>
    );
}

export default HomeScreen;
