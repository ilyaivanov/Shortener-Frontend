//Choose one of these

// import api from './bitlyAPI';
// import api from './mockAPI';
import api from './tubityAPI';

export default url => new api().shorten(url);
