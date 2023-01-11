import { Cast, Title, Review } from './AddInfoStyled';
import { useLocation } from 'react-router-dom';

export const AdditionalInfo = () => {
  const location = useLocation();
  const backLinkHref = { from: location.state?.from} ?? '/';
  return (
    <>
      <Title>Additional Info</Title>
      <Cast to="cast" state={backLinkHref}> Cast </Cast>
      <Review to="review" state={backLinkHref}>Review</Review>
    </>
  );
};
