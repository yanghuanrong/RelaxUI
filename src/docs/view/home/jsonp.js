export function jsonp (params) {
  if(!params.url) return
  if(!params.jsonp) return
  const callback = params.jsonpCallback || 'jsonpCallback'
  const body = document.getElementsByTagName('body')[0];
  const script = document.createElement('script');
  const url = params.url + '?' + params.jsonp + '=' + callback
  script.setAttribute('src', url);
  body.appendChild(script);
  window[callback] = function (res) {
    body.removeChild(script)
    params.success(res)
  }
}
