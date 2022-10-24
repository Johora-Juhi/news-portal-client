import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
  console.log(news);
  const { author, details, image_url, title, rating, total_view } = news;
  return (
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <Image className='me-3' roundedCircle
            style={{ height: '60px' }}
            src={author.img}>
          </Image>
          <div>
            <p className='mb-0 mt-1'>{author.name}</p>
            <p className='mb-0'>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark className='me-3' />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 250 ?
              <p>{details.slice(0, 250) + '......'} <Link to={`/news/${news._id}`} >More</Link></p>
              :
              <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className='d-flex justify-content-center align-items-center'>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating.number}</span>
        </div>

        <div>
          <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;