
import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//  Removed unused "motion" import because animations are commented out
// import { motion } from 'framer-motion';

const News = () => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiurl = 'https://api.sfqlaw.com';

  const getApi = useCallback(async () => {
    try {
      const res = await axios.get(`${apiurl}/v2/api/blogs?page=1`);
      const result = res.data;
      setApi(result.blogs || []);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  }, [apiurl]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  const getTextOnly = (htmlString) =>
    htmlString.replace(/<[^>]+>/g, '').slice(0, 199);

  return (
    <div
      //  Changed "my-40" (too large gap) →  smaller and consistent spacing
      className="max-w-7xl mx-auto my-16 sm:my-12 py-6 sm:py-8 px-4 sm:px-6 md:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Latest Blogs
        </h2>

        <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto mb-8" />
      </div>

      {loading ? (
        <div className="text-center text-2xl font-bold py-16 text-gray-500 animate-pulse">
          Loading blogs...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {api.slice(0, 3).map((item, key) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* 
                 Fixed height (h-80) caused layout shift when lazy-loading images
                 Replaced with aspect ratio for smoother consistent layout 
              */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={`${item.image}`}
                  // src={`https://sfqapi.finitdigital.com/${item.image}`}
                  // src={item?.blog_id === "WdT3CoSa"? "/image (1).jpeg" : item?.blog_id === "piKOYOK4"? "/blog2-min-min 1.jpg" :item?.blog_id === "rwi1C5yr"?"/image.jpeg":""}
                  alt={item.title || "Blog Image"}
                  effect="blur"
                  placeholderSrc={"/BackgroundPlaceholder.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">
                  {getTextOnly(item.description)}...
                </p>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-t">
                <Link
                  to={item.slug ? `/blog-details/${item.slug}` : "#"}
                  className="text-primary hover:text-primary font-medium transition-all"
                >
                  Read More →
                </Link>

                {/* 
                   "new Date(item.date)" would throw error if date is null/invalid
                   Added conditional rendering for safety 
                */}
                {item.date && (
                  <span className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(News);

