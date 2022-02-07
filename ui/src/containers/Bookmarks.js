import { BookmarkForm } from '../components/form';
import { BookmarkList } from '../components/list';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Note: API calls should be done here, 'axios' is already added as dependency

export const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const getBookmarks = async () => {
    const response = await axios.get('http://localhost:3001/bookmarks');
    setBookmarks(response.data.bookmarks);
  };

  const addBookmark = async (bookmark) => {
    const response = await axios.post(
      'http://localhost:3001/bookmarks',
      bookmark
    );
    setBookmarks([...bookmarks, response.data.newBookmark]);
  };

  useEffect(() => {
    getBookmarks();

    return () => {
      setBookmarks([]);
    };
  }, []);

  return (
    <>
      <div className="container mt-5">
        <BookmarkForm addBookmark={addBookmark} />
        <BookmarkList bookmarks={bookmarks} />
      </div>
    </>
  );
};
