import { GifCard } from '../../GifCard/GifCard';

export const ContainerOwnGifs = ({ gifs }) => {
  return (
    <div>
      {gifs.map(({ title, url }) => (
        <GifCard url={url} title={title} />
      ))}
    </div>
  );
};
