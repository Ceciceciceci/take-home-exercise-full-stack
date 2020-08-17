import React from 'react';
import ReactDOM from 'react-dom';
import JoinForm from './../JoinForm';

//test that the form rendered 
it("The form renders and doesn't crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<JoinForm />,div);
})
