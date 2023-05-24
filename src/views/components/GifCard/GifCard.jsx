import { useState } from 'react';
import { HiLink } from 'react-icons/hi';
import './GifCard.scss';

export const GifCard = ({
  url,
  title,
  className = 'gif-card',
  tags = ['trending'],
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyGifLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((error) =>
        console.error('Error while copying to clipboard:', error)
      );
  };
  return (
    <div className={className}>
      <img src={url} />
      <p className={className + '__title-card'}>{title}</p>
      <p className={className + '__tags'}>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
      {isCopied ? (
        <p className={className + '__link-copied'}>Link Copied!</p>
      ) : (
        <p onClick={copyGifLink} className={className + '__copy-link'}>
          <HiLink /> Copy GIF Link
        </p>
      )}
    </div>
  );
};
