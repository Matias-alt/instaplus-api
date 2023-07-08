import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InstagramService {
  constructor(
  ) {}

  async authenticate() {
    const client_id = '1454088908675558';
    const redirect_uri = 'http://localhost:5173/Home';

    const params = `client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user_media,user_profile&response_type=code`

    axios.get(`https://api.instagram.com/oauth/authorize?${params}`).then((response) => {
      if(response.status === 200) {
        console.log(response.request);
      }
    }).catch((error) => {
      console.log(error);
    });;
    
    return true;
  }
}
