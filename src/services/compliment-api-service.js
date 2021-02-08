import config from '../config';

const complimentUrl = `${config.API_ENDPOINT}/compliments`;

const ComplimentApiService = {
  getCompliments() {
    return fetch(`${complimentUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  getComplimentById(id) {
    return fetch(`${complimentUrl}/${id}`, {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};
export default ComplimentApiService;
