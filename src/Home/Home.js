import React, {useState} from 'react';
import "./Home.css";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


export default function Home() {

  return (
    <div className='main-container'>
        <div className="opening-message">
            <div className="image-container"></div>
            <p className="text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Ullam exercitationem itaque commodi corporis eum? Consequuntur, 
                 tempore ab nostrum earum repudiandae a
                 ssumenda voluptatum vel. Ratione, molestias animi sint culpa earum error.
            </p>
        </div>
        <div className="navigation">
          <a href='#mission'>Our Mission</a>
          <a href='#vision'>Our Vision</a>
          <a href='#contact'>Contact Us</a>

        </div>
        <div className="block" id='mission'>
            <p className="title">Our Mission</p>
            <p className="description"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nemo aspernatur rerum iste labore voluptatem. 
             Magnam cupiditate autem voluptatum illo, 
             fuga et placeat sapiente unde. 
             Nostrum asperiores eos amet consequatur quasi.
            </p>
            <Bar
  datasetIdKey='id'
  data={{
    labels: ['2010', '2015', '2020'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      }
    ],
  }}
/>
        </div>
        <div className="block" id='vision'>
          <p className="title">Our Vision</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quo adipisci unde doloribus dicta quibusdam quaerat minus, 
            reiciendis sequi delectus. Ullam nemo, obcaecati 
            labore cumque voluptatibus corporis eaque illo quam deleniti!
          </p>
        </div>
        <div className="block">
          <div className="google_form">
            <div className="google_form_links">
              <p className="google_form-title">Need Help?</p>
              <p>Find information and resources</p>
              <ul>
                <li>
                   <a 
                       href="https://forms.gle/EYh2nRCS6LkavZrR8"
                       target="_blank" rel="noreferrer"
                   >You or your family is currently homeless</a></li>
                <li>
                   <a href="https://forms.gle/HYERAyvVyHb2hsZQ7" target="_blank" rel="noreferrer">
                    You or your family is in danger of becoming homeless
                   </a>
                </li>
              </ul>
            </div>
            <div className="google_form_links">
              <p className="google_form-title">RESEARCH</p>
              <p>Find more information on topics ranging from Criminalization to How to Get Involved:</p>
              <ul>
                <li>
                  <a href="https://forms.gle/kq8wWvH3j1PGYSN88" target="_blank" rel="noreferrer">
                  Reports
                  </a>
                </li>
                <li>
                   <a href="https://forms.gle/TNRquxNRguwqT2pW8" target="_blank" rel="noreferrer"> 
                   Manuals
                   </a>
                </li>
              </ul>
            </div>
            <div className="google_form_links">
              <p className="google_form-title">TAKE ACTION</p>
              <p>Be a part of the solution:</p>
              <ul>
                <li>
                  <a href="https://forms.gle/JGS9G5ccxLuJid4W6" target="_blank" rel="noreferrer">
                  Donate
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/t1FPS68Ff3R2Fi2E8" target="_blank" rel="noreferrer">
                  Organize
                  </a>
                </li>
                <li>
                  <a href="https://forms.gle/aoXc2dQDF65NnKQx6" target="_blank" rel="noreferrer">
                  Volunteerx
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
    </div>
  )
}
