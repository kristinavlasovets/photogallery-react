import React, { useEffect, useState } from "react";
import { Collection } from "./components/Collection";
import { getData } from "./services/WebService";

export const App = () => {

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async() => {
      const data = await getData(
        "/db.json")
      console.log(data)
    }
    getCollections();
  }, []);

  return (
    <div className="app">
      <h1>My photo gallery</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">all</li>
          <li>inspo</li>
          <li>bloom</li>
          <li>career</li>
          <li>see the world</li>
        </ul>
        <input className="search-input" />
      </div>
      <div className="content">
        <Collection
          name="my pins"
          images={[
            "https://i.pinimg.com/564x/66/af/47/66af47a0b385c34d34ab7ae060dfa429.jpg",
            "https://i.pinimg.com/564x/56/00/7d/56007d6c0592e60e45eddd1f01480c4e.jpg",
            "https://i.pinimg.com/564x/d8/7e/fb/d87efbb6ef3d02c5d7fa50faf59b9a7e.jpg",
            "https://i.pinimg.com/564x/1d/1e/98/1d1e981620882327932261922c3fe8f9.jpg",
          ]}
        />
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
};
