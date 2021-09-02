import React from 'react';
import Sidebar from "../../components/sidebar";
import Image from "next/image";
import WishCard from "../../components/WishCard";
import withAuth from "../../HOC/withAuth";
import {Mywish} from "../mywish/Mywish";
function Wishlist() {
    return (
        <div className="flex container">
            <Sidebar/>
            <Mywish />
        </div>
    );
}
export default withAuth(Wishlist);