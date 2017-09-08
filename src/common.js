export const error = message => {
  function E() {
    this.message = message
  }

  E.prototype = new Error
  E.prototype.name = 'InvalidCharacterError'
  E.prototype.code = 5

  return E
}


export const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
