// requires modules to connect to the store
const fs = require('fs/promises');
const path = require('path');

// store path
const filePath = path.join(__dirname, '../store/users.json');

const getBookmarks = (req, res) => {
  // recover all bookmarks here
  const bookmarks = require('../store/bookmarks.json');

  res.json({ ok: true, bookmarks });
};

const addBookmark = (req, res) => {
  // add the new bookmark, give it an ID and return it
  res.send({});
};

module.exports = { getBookmarks, addBookmark };
