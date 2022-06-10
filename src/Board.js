import React from "react";
import SearchArea from "./component/SearchArea";
import Breadcrumb from "./component/Breadcrumb";

function Board(props) {
  return (
    <>
        <SearchArea />
        <div className="ContentArea">
            <Breadcrumb />
            <div className="content_inner">
                
            </div>
        </div>
    </>
    );
}

export default Board;
