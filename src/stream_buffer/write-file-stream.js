// @ts-check

// 스트림으로 큰 파일 처리하기
// aaaaaaaaabbbbbbbbaaaaaaaaabbbbbbbbbb.....aaaaabbbb
// 위와 같은 파일에서, a의 연속 구간(a block)의 개수와, b의 연속 구간(b block)의 개수를 세는 프로그램

const fs = require('fs')

const ws = fs.createWriteStream('local/big-file')

const NUM_MBYTE = 100

/** @type {Object.<string, number>} */
const numBlocksPerCharacter = {
  a: 0,
  b: 0,
}

for (let i = 0; i < NUM_MBYTE; i += 1) {
  // 문자 a는 1byte, 1 * 1024 * 1024 = 1mb, 100번 loop를 돌면 100mb 파일 생성
  // ws.write('a'.repeat(1024 * 1024))

  const blockLength = Math.floor(800 + Math.random() * 200) // 800에서 1000사이의 랜덤 정수
  const character = i % 2 === 0 ? 'a' : 'b'
  ws.write(character.repeat(1024 * blockLength)) // a, b를 랜덤하게 입력

  numBlocksPerCharacter[character] += 1
}

console.log(numBlocksPerCharacter)
