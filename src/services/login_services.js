 import $$ from 'cmn-utils';

 export async function login_services(payload) {
   console.log('ajax',payload)
   return $$.post('/api/user/login', payload);
 }
