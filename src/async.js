// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

/**
 *
 * @param {number} duration
 */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('complete')
    }, 1000)
  })
}

async function main() {
  console.log('first')
  await sleep(1000)
  console.log('second')
  await sleep(1000)
  console.log('third')
  await sleep(1000)
  console.log('finish')
  await sleep(1000)
}

main()
