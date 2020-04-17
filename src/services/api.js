import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/*O emulador não consegue acessar o localhost do computaodr, para resolver, copiar esse código:
adb reverse tcp:3333 tcp:3333
O número 3333 é a porta que eu acesso no localhost.
*/
