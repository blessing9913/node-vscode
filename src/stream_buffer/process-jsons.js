// @ts-check

const { log } = require('console')
const fs = require('fs')

/**
 *
 * @param {number} highWaterMark
 */
function processJson(highWaterMark) {
  const rs = fs.createReadStream('local/jsons', {
    encoding: 'utf-8',
    highWaterMark,
  })

  let totalSum = 0
  let accumulatedJsonStr = ''

  rs.on('data', (chunk) => {
    // log('Event: data: ', chunk)

    if (typeof chunk !== 'string') {
      return
    }

    accumulatedJsonStr += chunk

    const lastNewLineIndex = accumulatedJsonStr.lastIndexOf('\n')

    const jsonLinesStr = accumulatedJsonStr.substring(0, lastNewLineIndex)
    accumulatedJsonStr = accumulatedJsonStr.substring(lastNewLineIndex)

    totalSum += jsonLinesStr
      .split('\n')
      .map((jsonLine) => {
        try {
          return JSON.parse(jsonLine)
        } catch {
          return undefined
        }
      })
      .filter((json) => json)
      .map((json) => json.data)
      .reduce((sum, curr) => sum + curr, 0)
  })

  rs.on('end', () => {
    log('Event: end')
    log(`totalSum (highWaterMark: ${highWaterMark}): `, totalSum)
  })
}

for (let i = 0; i < 50; i += 1) {
  processJson(i)
}
