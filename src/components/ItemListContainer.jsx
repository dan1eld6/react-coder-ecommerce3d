import { getPrinters } from "../data/firebase";
import { getFilaments } from "../data/mockAPI";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

import React from "react";
import Card from "./Card";

export default function ItemListContainer() {
    return <Card />;
}
