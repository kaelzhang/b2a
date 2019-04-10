import {
  chars,
  error
} from './common'


const E = error('The string to be decoded is not correctly encoded')

export const _atob = typeof atob !== 'undefined'
  ? input => atob(input)
  : input => {

    const str = String(input).replace(/[=]+$/, '')

    if (str.length % 4 == 1) {
      throw new E
    }

    let output = ''

    for (
      // initialize result and counters
      let bc = 0, bs, buffer, idx = 0;
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer)
    }

    return output
  }


const utf16 = input => decodeURIComponent(
  input
  .split('')
  .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
  .join('')
)


export default input => utf16(_atob(input))
