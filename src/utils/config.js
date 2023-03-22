// export const BASE_URL = 'http://172.16.250.240';
export const BASE_URL = 'https://demo1.orex.es';

// export const BASE_URL = 'http://103.139.157.231';

export const IMAGE_URL = `${BASE_URL}/cgi-bin/koha/members/patronimage.pl?borrowernumber=`;
export const data = {
  userid: '2KL19EC021', 
  password: 'admin',
};
export const USER_INFO = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=GetPatronInfo&patron_id`;

export const BARCODE_URL = `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=LookupPatron&id`;
export const BOOK = `https://demo1.orex.es/cgi-bin/koha/ilsdi.pl?service=GetRecords&id=19400`;

export const QP_URL =
  'https://drive.google.com/drive/folders/1RmjRVuILdoAhFL_kWNueIcoF8fA5PoMl';

export const FEEDBACK_URL = 'https://forms.gle/CRoQvAfyo4qPNVKu6';
