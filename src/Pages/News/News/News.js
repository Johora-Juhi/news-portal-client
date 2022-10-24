import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const news =useLoaderData();
    const { author, details, image_url, title, rating,category_id } = news;
    return (
        <Card >
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <div className="d-flex justify-content-between align-items-center">
        
          <h6>Author_Name: <small>{author.name}</small></h6>
          <h6>Publish_Date: <small>{author.published_date}</small></h6>
        

        <div className='d-flex justify-content-center align-items-center'>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating.number}</span>
        </div>

        
      </div>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="primary">All news in this category</Button></Link>
      </Card.Body>
    </Card>
    );
};

export default News;