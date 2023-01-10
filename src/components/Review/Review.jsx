import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api';
import { ReviewList, Title } from './ReviewStyled';

const Review = () => {
  const { id } = useParams();
  const [results, setResults] = useState();

  useEffect(() => {
    async function getReview() {
      try {
        const { results } = await getMovieReviews(id);
        setResults(results);
      } catch (error) {}
    }

    getReview();
  }, [id]);

  return (
    <ReviewList>
      {results && results.length > 0
        ? results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Title>
                  <b>{author}</b>
                </Title>
                <p>
                  {' '}
                  <b>Review:</b> <br />
                  {content}
                </p>
              </li>
            );
          })
        : 'No info yet'}
    </ReviewList>
  );
};

export default Review;
