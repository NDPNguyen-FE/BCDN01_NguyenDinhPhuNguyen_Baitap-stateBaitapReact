import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ShowProduct.scss";

function ShowProduct({ name, src }) {
  return (
    <div className='product'>
      <Container>
        <Row className='text-center my-5'>
          <Col md={6}>
            <div className='product-image'>
              <img
                className='model-image'
                src='https://thu-kinh.vercel.app/glassesImage/model.jpg'
                alt='model-fashion'
              />

              <div className='glass-image'>
                <img src={src} alt='glasses' />
              </div>

              <div className='product-detail'>
                <h3>{name}</h3>

                <p>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <img
              className='model-image'
              src='https://thu-kinh.vercel.app/glassesImage/model.jpg'
              alt='model-fashion'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowProduct;
