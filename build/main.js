(() => {
  // src/transfile.js
  var objs = [
    {
      foo: {
        bar: {
          barz: 1
        }
      }
    },
    {
      foo: {}
    },
    {}
  ];
  console.log(objs.map((obj) => {
    const { foo } = obj;
    if (foo) {
      const { bar } = foo;
      if (bar) {
        return bar.barz;
      }
    }
    return void 0;
  }));
  console.log(objs.map((obj) => {
    var _a, _b;
    return (_b = (_a = obj.foo) == null ? void 0 : _a.bar) == null ? void 0 : _b.barz;
  }));
})();
