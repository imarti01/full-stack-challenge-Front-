import { useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import './FormUpload.scss';
import { addGifRequest } from '../../../../api/gifUserRequests';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

export const FormUpload = () => {
  const tagInput = useRef();
  const navigate = useNavigate();
  const { addGif } = useContext(UserContext);

  const [isUrlOpen, setIsUrlOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formUpload, setFormUpload] = useState({
    title: '',
    url: '',
  });

  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setFormUpload({ ...formUpload, [e.target.name]: e.target.value });
  };

  const handleUploadFile = (e) => {
    setFormUpload({ ...formUpload, file: e.target.files[0] });
  };

  const addTag = (e) => {
    e.preventDefault();
    setTags([...tags, e.target.value]);
    tagInput.current.value = '';
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', formUpload.title);
    formData.append('url', formUpload.url);
    formData.append('tags', tags);
    formData.append('file', formUpload.file);
    setIsLoading(true);
    const res = await addGifRequest(formData);
    if (res.data?.ok) {
      addGif(res.data.newGif);
      navigate('/dashboard');
    }
  };

  return (
    <form className="form-upload">
      <p>
        <span>1.</span> Add the title of your Gif:
      </p>
      <input
        className="form-upload__input"
        type="text"
        name="title"
        onChange={handleChange}
        value={formUpload.title}
      />
      <p>
        <span>2.</span> Add the Gif:
      </p>
      <div className="form-upload__upload">
        <label
          className="form-upload__upload--btn"
          onClick={() => setIsUrlOpen(false)}
        >
          Upload File
          <input
            className="form-upload__upload--btn--hidden"
            type="file"
            name="file"
            onChange={handleUploadFile}
          />
        </label>
        OR
        <div
          onClick={() => setIsUrlOpen(true)}
          className="form-upload__upload--btn"
        >
          Add URL
        </div>
      </div>
      <input
        className={isUrlOpen ? 'form-upload__url' : 'form-upload__url--close'}
        type="text"
        name="url"
        onChange={handleChange}
        value={formUpload.url}
        placeholder="Type the url here"
      />
      <p>
        <span>3.</span> Add tags:{' '}
      </p>
      <input
        className="form-upload__input"
        type="text"
        name="tag"
        onKeyDown={(e) => e.key === 'Enter' && addTag(e)}
        ref={tagInput}
      />

      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            #{tag}
            <IoIosClose
              className="form-upload__remove-tag"
              onClick={() => {
                setTags(tags.filter((el) => el !== tag));
              }}
            />
          </li>
        ))}
      </ul>

      <button onClick={submitForm}>Add</button>
    </form>
  );
};
