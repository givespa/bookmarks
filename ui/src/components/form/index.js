import { useEffect, useState } from 'react';

export const BookmarkForm = ({ addBookmark }) => {
  const [bookmark, setBookmark] = useState({
    title: '',
    link: '',
  });

  const [disableBtn, setDisableBtn] = useState(true);

  const handleInput = (e) => {
    setBookmark({
      ...bookmark,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addBookmark(bookmark);

    setBookmark({
      title: '',
      link: '',
    });
  };

  const disableButton = () => {
    if (bookmark.title !== '' && bookmark.link !== '') {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  useEffect(() => {
    disableButton();
  }, [bookmark]);

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-6 m-auto">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
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
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={disableBtn}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
