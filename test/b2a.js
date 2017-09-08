import {
  btoa,
  atob
} from '../src'

import {
  _btoa
} from '../src/btoa'

import {
  _atob
} from '../src/atob'

import test from 'ava'

;[
  'a',
  '1',
  'a=1&b=2',
  'a=http://abc.com',
  '中文'

].forEach(string => {

  const buffer_encoded = Buffer.from(string).toString('base64')

  test(`${string}: ${buffer_encoded}`, t => {
    const encoded = btoa(string)
    const buffer_decoded = Buffer.from(encoded, 'base64').toString()

    t.is(encoded, buffer_encoded, 'wrong encoded')
    t.is(buffer_decoded, string,
      'could not buffer decoded from btoa()ed string')
    t.is(atob(encoded), string, 'could not atob from btoa()ed string')
  })
})


test('_bota error', async t => {
  try {
    _btoa('中文')
  } catch (e) {
    t.is(e.name, 'InvalidCharacterError', 'error name not match')
    return
  }

  t.fail('should fail')
})
