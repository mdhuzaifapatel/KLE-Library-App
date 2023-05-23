// DEMO
// export const BASE_URL = 'https://demo1.orex.es';
// export const BASE_URL_8080 = 'https://intra1.orex.es';

// COLLEGE
export const BASE_URL = 'http://103.139.157.231';
export const BASE_URL_8080 = 'http://103.139.157.231:8080';

// Super admin login details
const userid = 'app_admin';
const password = 'admin@app1';

// const userid = 'admin';
// const password = 'admin';

export const ADMIN_LOGIN_URL = `${BASE_URL_8080}/cgi-bin/koha/svc/authentication?userid=${userid}&password=${password}`;

export const IMAGE_URL = `${BASE_URL_8080}/cgi-bin/koha/members/patronimage.pl?borrowernumber`;

export const USER_INFO = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=GetPatronInfo&patron_id`;

export const BOOKS_URL = `${BASE_URL_8080}/cgi-bin/koha/members/readingrec.pl?borrowernumber`;

export const BARCODE_URL = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=LookupPatron&id`;

export const CHANGE_PASSWORD_URL = `${BASE_URL}/api/v1/patrons`

export const QP_URL =
  'https://drive.google.com/drive/folders/1RmjRVuILdoAhFL_kWNueIcoF8fA5PoMl';

export const FEEDBACK_URL = 'https://forms.gle/CRoQvAfyo4qPNVKu6';

// export const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzXWZCHczHVkL4ddEHKuCasd0jGPtS2BnA2GEXrI_QaUIp6koNkn51hj0I_b-cgOsM18g/exec';
