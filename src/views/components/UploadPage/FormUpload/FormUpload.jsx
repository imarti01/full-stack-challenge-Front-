import { useRef, useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

import './FormUpload.scss';
import { addGifRequest } from '../../../../api/gifUserRequests';
import { useNavigate } from 'react-router-dom';

export const FormUpload = () => {
  const tagInput = useRef();
  const navigate = useNavigate();

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

    const res = await addGifRequest(formData);
    if (res.data?.ok) {
      navigate('/dashboard');
    }
  };

  return (
    <form className="form-upload">
      <p>
        <span>1.</span> Add the title of your Gif:
      </p>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formUpload.title}
      />
      <p>
        <span>2.</span> Add the Gif:
      </p>
      <div>
        <label>
          Upload File
          <input type="file" name="file" onChange={handleUploadFile} />
        </label>
        OR
        <label>
          Add URL
          <input
            type="text"
            name="url"
            onChange={handleChange}
            value={formUpload.url}
          />
        </label>
      </div>
      <p>
        <span>3.</span> Add tags:{' '}
      </p>
      <input
        type="text"
        name="tag"
        onKeyDown={(e) => e.key === 'Enter' && addTag(e)}
        ref={tagInput}
      />
      <ul>
        {tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>

      <button onClick={submitForm}>
        <BsFillSendFill />
      </button>
    </form>
  );
};
