// export const BASE_URL = 'http://172.16.250.240';
export const BASE_URL = 'https://kopac.tamil.fr';

// export const BASE_URL = 'http://103.139.157.231';

export const IMAGE_URL =
  'http://172.16.250.240:8080/cgi-bin/koha/members/patronimage.pl?borrowernumber=';
export const data = {
  userid: '2KL19EC021',
  password: 'admin',
};
export const USER_INFO = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=GetPatronInfo&patron_id`;

export const BARCODE_URL = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?ilsdi.pl?service=LookupPatron&id=`;

export const QP_URL =
  'https://drive.google.com/drive/folders/1RmjRVuILdoAhFL_kWNueIcoF8fA5PoMl';

export const FEEDBACK_URL = 'https://forms.gle/CRoQvAfyo4qPNVKu6';
