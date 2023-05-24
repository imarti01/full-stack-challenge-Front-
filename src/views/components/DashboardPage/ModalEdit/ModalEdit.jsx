import { useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { editGifRequest } from '../../../../api/gifUserRequests';
import { UserContext } from '../../../../context/UserContext';

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
    <div>
      <div></div>
      <div>
        <h2>EDIT</h2>
        <p>Title:</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Tags:</p>
        <input
          type="text"
          name="tag"
          onKeyDown={(e) => e.key === 'Enter' && addTag(e)}
          ref={tagInput}
        />
        <p>
          {tags.map((tag) => (
            <span key={tag}>
              #{tag}
              <IoIosClose
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
