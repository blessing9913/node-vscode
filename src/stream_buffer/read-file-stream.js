// @ts-check

// 스트림으로 큰 파일 처리하기 (단순 버퍼를 사용했을 때 보다 스트림을 사용하면 OS Memory를 현저히 적게 사용 함)
// 처리할 파일의 Chunk 단위로 메모리에 올려서 사용하기 때문
// aaaaaaaaabbbbbbbbaaaaaaaaabbbbbbbbbb.....aaaaabbbb
// 위와 같은 파일에서, a의 연속 구간(a block)의 개수와, b의 연속 구간(b block)의 개수를 세는 프로그램

const { log } = console

const fs = require('fs')

const rs = fs.createReadStream('local/big-file', {
  encoding: 'utf-8',
  highWaterMark: 65536 * 2, // 메모리 버퍼에 쌓이는 사이즈를 2배로 늘려서 loop를 줄임
})

/** @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

/** @type {string | undefined} */
let prevCharacter
let chunkCount = 0

rs.on('data', (data) => {
  chunkCount += 1

  if (typeof data !== 'string') {
    return
  }

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
})

rs.on('end', () => {
  log('Event: end')
  log('blockCount: ', numBlocksPerCharacter)
  log('chunkCount: ', chunkCount)
})
