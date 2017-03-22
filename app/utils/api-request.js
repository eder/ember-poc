import AjaxRequest from 'ember-ajax/ajax-request';
class ApiRequest extends AjaxRequest {
  get host() {
    return 'https://api.myjson.com/';
  }
}

export default function API() {
const request = new ApiRequest();
  return request;
}
