import React from 'react';
import './Contents.css'; // Import the CSS file
import parse from 'html-react-parser';



function Content({ html }) {

    return (
        <>
            {parse(html)}
        </>
    );
}

export default Content;