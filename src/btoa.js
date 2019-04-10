import {
  chars,
  error
} from './common'

// btoa polyfill for IE<10 courtesy https://gist.github.com/nignag/999166

const E = error('The string to be encoded contains characters out of range')

export const _btoa = typeof btoa !== 'undefined'
  /* istanbul ignore next */
  ? input => { return btoa(input) }
  : input => {
    const str = String(input)
    let output = ''

    for (
      // initialize result and counter
      let block, charCode, idx = 0, map = chars;
        // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
      str.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {

      charCode = str.charCodeAt(idx += 3 / 4)
      if (charCode > 0xFF) {
        throw new E()
      }

      block = block << 8 | charCode
    }

    return output
  }


const utf8 = input => encodeURIComponent(input).replace(
  /%([0-9A-F]{2})/g,
  (match, p1) => String.fromCharCode('0x' + p1)
)


export default (input) => _btoa(utf8(input))
