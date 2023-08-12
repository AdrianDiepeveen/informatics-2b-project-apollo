import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section_padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Explore Our Revolutionary Fitness Trackers</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="Garmin" text="Garmin Forerunner" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Whoop" text="Whoop Band" />
        <Article imgUrl={blog03} date="Fitbit" text="Fitbit Versa" />
        <Article imgUrl={blog04} date="Apple" text="Apple Watch" />
        <Article imgUrl={blog05} date="Polar" text="Polar Watch" />
      </div>
    </div>
  </div>
);

export default Blog;