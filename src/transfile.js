// esbuild 활용

const objs = [
  {
    foo: {
      bar: {
        barz: 1,
      },
    },
  },
  {
    foo: {},
  },
  {},
]

console.log(
  objs.map((obj) => {
    const { foo } = obj
    if (foo) {
      const { bar } = foo
      if (bar) {
        return bar.barz
      }
    }
    return undefined
  })
)

// optional chainning
console.log(objs.map((obj) => obj.foo?.bar?.barz))
