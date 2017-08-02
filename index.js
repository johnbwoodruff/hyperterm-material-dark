// Colors
const colors = {
  black: '#000000',
  red: '#F44336',
  green: '#9CCC65',
  yellow: '#FFEB3B',
  blue: '#42A5F5',
  magenta: '#CE93D8',
  cyan: '#00BCD4',
  white: '#E0E0E0',
  lightBlack: '#807e7b',
  lightRed: '#E57373',
  lightGreen: '#8BC34A',
  lightYellow: '#FFF59D',
  lightBlue: '#29B6F6',
  lightMagenta: '#E1BEE7',
  lightCyan: '#4DD0E1',
  lightWhite: '#FFFFFF'
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#FAFAFA',
    backgroundColor: `#303030`,
    borderColor: '#303030',
    cursorColor: 'rgba(128, 222, 234, .8)',
    colors,
    termCSS: `
      ${config.termCSS || ''}
      x-screen a {
        text-decoration: underline !important;
        color: ${colors.lightCyan} !important;
      }
    `,
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none;
      }
      .header_header {
        background-color: #212121;
      }
      .tabs_borderShim {
        display: none;
      }
      .tab_tab {
        border: none;
        color: rgba(255, 255, 255, 0.2);
      }
      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${config.accentColor || '#80CBC4'};
        transform: scaleX(0);
        transition: none;
      }
      .tab_tab.tab_active {
        color: #FFF;
      }
      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 100ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }
      .tab_textInner {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        padding: 0px 24px 0 8px;
      }
    `
  });
};