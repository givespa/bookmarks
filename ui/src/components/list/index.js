export const BookmarkList = ({ bookmarks }) => (
  <>
    <div className="row">
      {bookmarks.length > 0 &&
        bookmarks.map((bookmark, index) => (
          <div className="col-md-4 mb-4" key={index} href={bookmark.link}>
            <div className="card">
              <div className="card-body">
                <p className="card-text text-center">
                  <a
                    href={bookmark.link}
                    style={{ textDecoration: 'none' }}
                    className="text-black"
                    target="_blank"
                  >
                    {bookmark.title}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </>
);
