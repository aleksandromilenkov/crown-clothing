import React from "react";
import { Outlet } from "react-router-dom";
import { Route } from "workbox-routing/Route";
import { Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CategoryPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import "./shop.styles.scss";

const ShopPage = () => {
  const location = useLocation();
  return (
    <div className="shop-page">
      <Outlet />
    </div>
  );
};

export default ShopPage;
