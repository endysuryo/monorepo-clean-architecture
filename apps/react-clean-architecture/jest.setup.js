import '@testing-library/jest-dom'

window.matchMedia =
  window.matchMedia ||
  (() => {
    return { matches: false, addListener: () => {}, removeListener: () => {} }
  })
