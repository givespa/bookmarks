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

  useEffect(() => {
    getBookmarks();

    return () => {
      setBookmarks([]);
    };
  }, []);

  return (
    <>
      <BookmarkForm />
      <BookmarkList bookmarks={bookmarks} />
    </>
  );
};
