import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = () => {
  let params = useParams();
  let { collectionId } = params;
  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title} </h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
