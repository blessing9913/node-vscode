// @ts-check

//require('core-js')

const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()
console.log(flattendArray)

const original = 'abcabc123'
const changed = original.replace('abc', '123')
console.log(changed)
const changedAll = original.replaceAll('abc', '123')
console.log(changedAll)

/**
 *
 * @param {number} duration
 * @returns
 */
function sleep(duration) {
  return new Promise((resolve) => {
    console.log('sleep start')
    setTimeout(() => {
      console.log('sleep done: ', duration)
      resolve(duration)
    }, duration)
  })
}

function alwaysReject() {
  return new Promise((resolve, reject) => {
    reject()
  })
}

// reject가 발생하면 then으로 안넘기고 오류발생
Promise.all([sleep(1000), sleep(1500), sleep(2000)]).then((value) => {
  console.log('Promise.all done!', value)
})

// resolve, reject 모든 결과에 대해 완료하고 then으로 넘김
Promise.allSettled([
  sleep(1000),
  sleep(1500),
  sleep(2000),
  alwaysReject(),
]).then((value) => {
  console.log('Promise.allSettled done!', value)
})
