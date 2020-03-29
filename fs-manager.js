import RNFS from 'react-native-fs';

const ROOT_PATH = RNFS.DocumentDirectoryPath;

const USER_FILENAME = 'u.ck';
const TOKEN_FILENAME = 'tk.ck';
const FAVORITES_FILENAME = 'fav.ok';

const write = (filename, content) => {
  let path = ROOT_PATH + '/' + filename;
  return RNFS.writeFile(path, content, 'utf8')
    .then(() => {
      return true;
    })
    .catch(err => {
      return false;
    });
};

const read = async filename => {
  let path = ROOT_PATH + '/' + filename;
  const exists = await RNFS.exists(path);
  if (exists) {
    const content = await RNFS.readFile(path, 'utf8');  
    if (content.length === 0) {
      return undefined;
    }
    return content;
  } else {
    return undefined;
  }
};

const remove = async filename => {
  let path = ROOT_PATH + '/' + filename;
  const exists = await RNFS.exists(path);
  if (exists) {
    const result = await RNFS.unlink(path);
    return result;
  }
  return false;
};

export default {
  logout() {
    remove(TOKEN_FILENAME);
    remove(USER_FILENAME);
    remove(FAVORITES_FILENAME);
  },

  getUser() {
    return read(USER_FILENAME);
  },
  saveUser(content) {
    return write(USER_FILENAME, content);
  },
  removeUser() {
    return remove(USER_FILENAME);
  },

  getToken() {
    return read(TOKEN_FILENAME);
  },
  saveToken(content) {
    return write(TOKEN_FILENAME, content);
  },
  removeToken() {
    return remove(TOKEN_FILENAME);
  },

  getFavorites() {
    return read(FAVORITES_FILENAME);
  },
  saveFavorites(data) {
    return write(FAVORITES_FILENAME, data);
  },
  removeFavorites() {
    return remove(FAVORITES_FILENAME);
  },

  
};
