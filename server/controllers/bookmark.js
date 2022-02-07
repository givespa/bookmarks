const uuid = require('uuid').v4;

// requires modules to connect to the store
const fs = require('fs/promises');
const path = require('path');

// store path
const filePath = path.join(__dirname, '../store/bookmarks.json');

const getBookmarks = (req, res) => {
  // recover all bookmarks here
  const bookmarks = require('../store/bookmarks.json');

  res.json({ ok: true, bookmarks });
};

const addBookmark = async (req, res) => {
  // add the new bookmark, give it an ID and return it
  const { title, link } = req.body;

  let bookmarks = require('../store/bookmarks.json');

  const newBookmark = {
    id: uuid(),
    title,
    link,
  };

  bookmarks.push(newBookmark);

  try {
    await fs.writeFile(filePath, JSON.stringify(bookmarks));
  } catch (err) {
    console.log(err);
    return res.json({
      ok: false,
      message: 'Error',
    });
  }

  return res.json({ ok: true, newBookmark });
};

module.exports = { getBookmarks, addBookmark };
