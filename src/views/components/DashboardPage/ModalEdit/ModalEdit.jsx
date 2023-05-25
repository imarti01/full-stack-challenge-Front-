import { useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { editGifRequest } from '../../../../api/gifUserRequests';
import { UserContext } from '../../../../context/UserContext';
import { IoIosAddCircleOutline } from 'react-icons/io';
import './ModalEdit.scss';

export const ModalEdit = ({ gifToEdit, setGifToEdit }) => {
  const [title, setTitle] = useState(gifToEdit.title);
  const [tags, setTags] = useState(gifToEdit.tags);

  const tagInput = useRef();
  const { editGif } = useContext(UserContext);

  const addTag = (e) => {
    e.preventDefault();
    setTags([...tags, e.target.value]);
    tagInput.current.value = '';
  };

  const saveChanges = async () => {
    const gifEdited = { ...gifToEdit, title, tags };
    const res = await editGifRequest(gifEdited);
    if (res.data?.ok) {
      editGif(gifEdited);
      setGifToEdit(null);
    }
  };

  return (
    <div className="modal-edit">
      <div className="modal-edit__bg" onClick={() => setGifToEdit(null)}></div>
      <div className="modal-edit__modal">
        <IoIosClose
          className="modal-edit__modal--close-btn"
          onClick={() => setGifToEdit(null)}
        />
        <h4>Edit Title:</h4>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h4>Edit Tags:</h4>
        <div>
          <input
            type="text"
            name="tag"
            onKeyDown={(e) => e.key === 'Enter' && addTag(e)}
            ref={tagInput}
            placeholder="Add a new tag and press Enter"
          />
        </div>
        <p>
          {tags.map((tag) => (
            <span key={tag}>
              #{tag}
              <IoIosClose
                className="modal-edit__modal--remove-tag"
                onClick={() => setTags(tags.filter((el) => el !== tag))}
              />
            </span>
          ))}
        </p>

        <button onClick={saveChanges}>SAVE CHANGES</button>
      </div>
    </div>
  );
};
