export default (url: string) : boolean => {
  const httpRegex : RegExp = /^https?:\/\/[a-zA-Z]+\.[a=zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/i
  const wwwRegex : RegExp = /^www\.[a-zA-Z]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/i

  return httpRegex.test(url) || wwwRegex.test(url)
}

