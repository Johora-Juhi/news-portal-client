import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)

    return (
        <div>
            <h2>{categoryNews.length} news in this news category</h2>
            {
                categoryNews.map(news =>
                    <NewsSummeryCard key={news._id}
                        news={news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;