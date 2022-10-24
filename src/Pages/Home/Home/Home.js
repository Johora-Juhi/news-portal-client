import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>This containes total {allNews.length} news</h2>
            {
                allNews.map(news=> <NewsSummeryCard
                     key={news._id}
                     news={news}
                ></NewsSummeryCard>)
            }
            
        </div>
    );
};

export default Home;