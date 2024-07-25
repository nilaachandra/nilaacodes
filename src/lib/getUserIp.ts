import axios from 'axios';

export async function getUserIp(): Promise<string> {
  const response = await axios.get('https://api.ipify.org?format=json');
  return response.data.ip;
}
