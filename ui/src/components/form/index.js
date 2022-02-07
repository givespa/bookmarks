import { useState } from 'react';

export const BookmarkForm = ({ addBookmark }) => {
  const [bookmark, setBookmark] = useState({
    title: '',
    link: '',
  });

  const handleInput = (e) => {
    setBookmark({
      ...bookmark,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (bookmark.title === '') {
      return alert('Please enter a title');
    }

    if (bookmark.link === '') {
      return alert('Please enter a link');
    }

    addBookmark(bookmark);

    setBookmark({
      title: '',
      link: '',
    });
  };

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6 m-auto">
          <div className="card">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-2">
                  <label className="text-black">Title:</label>
                </div>
                <div className="col-md-10">
                  <input
                    value={bookmark.title}
                    className="form-control"
                    type="text"
                    name="title"
                    onInput={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-2">
                  <label className="text-black">Link:</label>
                </div>
                <div className="col-md-10">
                  <input
                    value={bookmark.link}
                    className="form-control"
                    type="text"
                    name="link"
                    onInput={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 m-auto">
                  <button className="btn btn-success" onClick={handleSubmit}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
