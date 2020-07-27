export const checkTitle = (title) => {
  const paths = ['jpeg', 'gif', 'png', 'apng', 'svg', 'bmp', 'ico']
  for (let i = 0; i < paths.length; i++) {
    if (title.includes(paths[i])) {
      return 'image'
    }
  }
  if (typeof title === 'string') {
    return 'string'
  } else {
    return 'unknown'
  }
}
