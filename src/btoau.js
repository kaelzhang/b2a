import btoa from './btoa'

// https://en.wikipedia.org/wiki/Base64#URL_applications
export default input =>
  btoa(input)
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
