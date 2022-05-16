// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random())
    }, duration)
  }).catch((err) => {
    console.log('err : ', err)
  })
}

sleep()
  .then((value) => {
    console.log('value : ', value)
    return sleep(1000)
  })
  .then((value) => {
    console.log('value : ', value)
    return sleep(1000)
  })
  .then((value) => {
    console.log('value : ', value)
    return sleep(1000)
  })
