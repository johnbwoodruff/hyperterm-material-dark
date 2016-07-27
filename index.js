exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#FAFAFA',
    backgroundColor: '#303030',
    borderColor: '#303030',
    cursorColor: 'rgba(128, 222, 234, .8)',
    colors: [
      '#000000',
      '#F44336',
      '#9CCC65',
      '#FFEB3B',
      '#42A5F5',
      '#CE93D8',
      '#00BCD4',
      '#FAFAFA',
      '#424242',
      '#E57373',
      '#8BC34A',
      '#FFF59D',
      '#29B6F6',
      '#E1BEE7',
      '#4DD0E1',
      '#FFFFFF'
    ],
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .header_header {
        background: #212121 !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_active::before {
        border-bottom: 2px solid #26C6DA;
      }
    `
  });
};
