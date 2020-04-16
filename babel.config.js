module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        // 组件库的名字，需要和 package.json 里的 name 相同
        "libraryName": "ht-ui-component",
        // 存放组件的文件夹，如果不想配置此项，默认文件夹的名字为 lib
        "libDir": "packages",
      }
    ]
  ]
}
