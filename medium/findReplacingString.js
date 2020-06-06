/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString = (S, indexes, sources, targets) => {
  if (!S.length || !indexes.length || !sources.length || !targets.length) return S
  let sArray = S.split('')
  for (let i = 0; i < indexes.length; i++) {
    let sourceChars = sources[i], targetChars = targets[i]
    let subStr = S.substring(indexes[i], indexes[i]+sourceChars.length)
    if (subStr != sourceChars) continue
    sArray[indexes[i]] = [targetChars]
    let restToReplace = sourceChars.length - 1
    while (restToReplace > 0) {
      restToReplace--
      sArray[++indexes[i]] = ""
    }
  }
  return sArray.join('')
}
