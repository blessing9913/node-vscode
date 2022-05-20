// @ts-check

// 단순 버퍼를 사용하면 OS Memory를 많이 사용 함(파일을 통째로 메모리에 올려놓고 읽어 드림)

const { log } = console

const fs = require('fs')

const data = fs.readFileSync('local/big-file', 'utf-8')

/** @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharacter

for (let i = 0; i < data.length; i += 1) {
  if (data[i] !== prevCharacter) {
    const newCharacter = data[i]

    if (!newCharacter) {
      /* eslint-disable-next-line no-continue */
      continue
    }

    prevCharacter = newCharacter
    numBlocksPerCharacter[newCharacter] += 1
  }
}

log('blockCount: ', numBlocksPerCharacter)
