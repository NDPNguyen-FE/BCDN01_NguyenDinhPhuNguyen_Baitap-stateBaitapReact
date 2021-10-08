import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowProduct from "../ShowProduct/ShowProduct";
import "./ListGlasses.scss";

function ListGlasses() {
  const [name, setName] = useState("GUCCI G8850U");
  const [src, setSrc] = useState(
    "https://thu-kinh.vercel.app/glassesImage/v1.png"
  );

  const dataGlasses = [
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v1.png",
      name: "GUCCI G8850U",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v2.png",
      name: "GUCCI G8759H",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v3.png",
      name: "DIOR D6700HQ",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v4.png",
      name: "DIOR D6005U",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v5.png",
      name: "PRADA P8750",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v6.png",
      name: "PRADA P9700",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v7.png",
      name: "FENDI F8750",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v8.png",
      name: "FENDI F8500",
    },
    {
      src: "https://thu-kinh.vercel.app/glassesImage/v9.png",
      name: "FENDI F4300",
    },
  ];

  const handleChangeGlasses = (value) => {
    const itemSource = value.target.src;
    const itemName = value.target.alt;
    setSrc(itemSource);
    setName(itemName);
  };

  const showGlasses = (data) => {
    return data.map((item, key) => {
      return (
        <img
          className='glasses-image'
          onClick={(e) => handleChangeGlasses(e)}
          src={item.src}
          alt={item.name}
          key={key}
        />
      );
    });
  };

  return (
    <>
      <ShowProduct src={src} name={name} />

      <div className='glasses'>
        <Container>
          <Row>{showGlasses(dataGlasses)}</Row>
        </Container>
      </div>
    </>
  );
}

export default ListGlasses;
