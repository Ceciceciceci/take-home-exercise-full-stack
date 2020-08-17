import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './../Modal';

//test that the form rendered 
it("The modal renders and doesn't crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal />,div);
})