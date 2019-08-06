import atob from './atob'

export default input => atob(
  input
  .replace(/-/g, '+')
  .replace(/_/g, '/')
)

