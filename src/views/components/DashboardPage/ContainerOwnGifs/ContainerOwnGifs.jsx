import { GifCard } from '../../GifCard/GifCard';
import { MdModeEditOutline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { ModalEdit } from '../ModalEdit/ModalEdit';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { deleteGifRequest } from '../../../../api/gifUserRequests';
import { UserContext } from '../../../../context/UserContext';
import './ContainerOwnGifs.scss';

export const ContainerOwnGifs = ({ gifs }) => {
  const [gifToEdit, setGifToEdit] = useState(null);

  const { deleteGifProvider } = useContext(UserContext);
  const deleteGif = (gifId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EB1D36',
      iconColor: '#EB1D36',
      color: '#35185A',
      cancelButtonColor: '#35185A',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteGifRequest(gifId);
        if (res.data?.ok) {
          deleteGifProvider(gifId);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your gif has been deleted.',
            icon: 'success',
            confirmButtonColor: '#EB1D36',
            iconColor: '#EB1D36',
            color: '#35185A',
          });
        }
      }
    });
  };

  return (
    <div className="container-own-gifs">
      {gifs.map((gif) => (
        <div className="container-own-gifs__gifs" key={gif._id}>
          <GifCard url={gif.url} title={gif.title} tags={gif.tags} />
          <span className="container-own-gifs__gifs--icons">
            <MdModeEditOutline
              className="container-own-gifs__gifs--icons--edit"
              onClick={() => setGifToEdit(gif)}
            />
            <AiTwotoneDelete
              className="container-own-gifs__gifs--icons--remove"
              onClick={() => deleteGif(gif._id)}
            />
          </span>
        </div>
      ))}
      {gifToEdit && (
        <ModalEdit gifToEdit={gifToEdit} setGifToEdit={setGifToEdit} />
      )}
    </div>
  );
};
