module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // change the title name in index.html
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const name = args;
        name[0].title = 'Tick Me';
        return name;
      });
  },
}