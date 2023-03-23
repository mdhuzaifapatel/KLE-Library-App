export const BASE_URL = 'http://172.16.250.240';
export const BASE_URL_8080 = 'http://172.16.250.240:8080';
// export const BASE_URL = 'https://demo1.orex.es';
// export const BASE_URL_8080 = 'https://intra1.orex.es';
// export const BASE_URL = 'http://103.139.157.231';

// Super admin login details
const userid = '2KL19EC021'; //admin admin
const password = 'admin';


export const ADMIN_LOGIN_URL = `${BASE_URL_8080}/cgi-bin/koha/svc/authentication?userid=${userid}&password=${password}`;

export const IMAGE_URL = `${BASE_URL_8080}/cgi-bin/koha/members/patronimage.pl?borrowernumber`;

export const USER_INFO = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=GetPatronInfo&patron_id`;

export const BOOKS_URL = `${BASE_URL_8080}/cgi-bin/koha/members/readingrec.pl?borrowernumber`;

export const BARCODE_URL = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=LookupPatron&id`;

export const BOOK = `https://demo1.orex.es/cgi-bin/koha/ilsdi.pl?service=GetRecords&id=19400`;

export const QP_URL =
  'https://drive.google.com/drive/folders/1RmjRVuILdoAhFL_kWNueIcoF8fA5PoMl';

export const FEEDBACK_URL = 'https://forms.gle/CRoQvAfyo4qPNVKu6';
