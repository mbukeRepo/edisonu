import React from 'react';

import Instagram from "./download.jpeg";
import Gmail from "./download6.jpeg";
import "./Icons.css";

export default function Icons() {
  return (
    <div className='icon_container'>
        <a href="http://google.com">
            <img src={Instagram} alt="" />
        </a>
        <a href="http://google.com">
            <img src={Gmail} alt="" />
        </a>
    </div>
  )
}
