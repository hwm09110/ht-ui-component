import Button from './Button/index.js'; // 引入组件

const components = [
  Button
];

const install = function(Vue) {
  if(install.installed) return;
  components.map(component => Vue.component(component.name, component));
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  Button
};
