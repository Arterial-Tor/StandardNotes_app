/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/javascripts/**/*.tsx', '../toast/src/**/*.tsx'],
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
        18: '4.5rem',
        26: '6.5rem',
        30: '7.5rem',
        70: '17.5rem',
        87.5: '21.875rem',
        125: '31.25rem',
        160: '40rem',
        'safe-top': 'var(--safe-area-inset-top)',
        'safe-bottom': 'var(--safe-area-inset-bottom)',
        'safe-left': 'var(--safe-area-inset-left)',
        'safe-right': 'var(--safe-area-inset-right)',
      },
      minWidth: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        8: '2rem',
        15: '3.75rem',
        20: '5rem',
        24: '6rem',
        30: '7.5rem',
        40: '10rem',
        42: '10.5rem',
        55: '13.75rem',
        60: '15rem',
        68: '17rem',
        70: '17.5rem',
        76: '19rem',
        80: '20rem',
        90: '22.5rem',
      },
      maxWidth: {
        76: '19rem',
        89: '22.25rem',
        125: '31.25rem',
      },
      height: {
        screen: 'var(--viewport-height)',
      },
      minHeight: {
        1: '0.25rem',
        2: '0.5rem',
        screen: 'var(--viewport-height)',
      },
      maxHeight: {
        110: '27.5rem',
        screen: 'var(--viewport-height)',
      },
      zIndex: {
        'editor-content': 'var(--z-index-editor-content)',
        'editor-title-bar': 'var(--z-index-editor-title-bar)',
        'resizer-overlay': 'var(--z-index-resizer-overlay)',
        'component-view': 'var(--z-index-component-view)',
        'panel-resizer': 'var(--z-index-panel-resizer)',
        'dropdown-menu': 'var(--z-index-dropdown-menu)',
        'footer-bar': 'var(--z-index-footer-bar)',
        'footer-bar-item': 'var(--z-index-footer-bar-item)',
        'footer-bar-item-panel': 'var(--z-index-footer-bar-item-panel)',
        preferences: 'var(--z-index-preferences)',
        'purchase-flow': 'var(--z-index-purchase-flow)',
        'lock-screen': 'var(--z-index-lock-screen)',
        modal: 'var(--z-index-modal)',
        toast: 'var(--z-index-toast)',
      },
      boxShadow: {
        inner:
          'var(--sn-stylekit-info-color) 1px 1px 0px 0px inset, var(--sn-stylekit-info-color) -1px -1px 0px 0px inset',
        bottom: 'currentcolor 0px -1px 0px 0px inset, currentcolor 0px 1px 0px 0px',
        main: '0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        'menu-item': '0.813rem',
      },
      screens: {
        'xsm-only': { min: '320px', max: '639px' },
        'sm-only': { min: '640px', max: '767px' },
        'md-only': { min: '768px', max: '1023px' },
        'lg-only': { min: '1024px', max: '1279px' },
      },
      transitionProperty: {
        width: 'width',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: 'var(--sn-stylekit-neutral-color)',
      'neutral-contrast': 'var(--sn-stylekit-neutral-contrast-color)',
      info: 'var(--sn-stylekit-info-color)',
      'info-darkened': 'var(--sn-stylekit-info-color-darkened)',
      'info-contrast': 'var(--sn-stylekit-info-contrast-color)',
      'info-backdrop': 'var(--sn-stylekit-info-backdrop-color)',
      success: 'var(--sn-stylekit-success-color)',
      'success-contrast': 'var(--sn-stylekit-success-contrast-color)',
      warning: 'var(--sn-stylekit-warning-color)',
      'warning-contrast': 'var(--sn-stylekit-warning-contrast-color)',
      danger: 'var(--sn-stylekit-danger-color)',
      'danger-contrast': 'var(--sn-stylekit-danger-contrast-color)',
      default: 'var(--sn-stylekit-background-color)',
      foreground: 'var(--sn-stylekit-foreground-color)',
      contrast: 'var(--sn-stylekit-contrast-background-color)',
      'secondary-contrast': 'var(--sn-stylekit-secondary-contrast-border-color)',
      text: 'var(--sn-stylekit-contrast-foreground-color)',
      border: 'var(--sn-stylekit-border-color)',
      'secondary-border': 'var(--sn-stylekit-secondary-border-color)',
      'passive-0': 'var(--sn-stylekit-passive-color-0)',
      'passive-1': 'var(--sn-stylekit-passive-color-1)',
      'passive-2': 'var(--sn-stylekit-passive-color-2)',
      'passive-3': 'var(--sn-stylekit-passive-color-3)',
      'passive-4': 'var(--sn-stylekit-passive-color-4)',
      'passive-4-opacity-variant': 'var(--sn-stylekit-passive-color-4-opacity-variant)',
      'passive-5': 'var(--sn-stylekit-passive-color-5)',
      'passive-6': 'var(--sn-stylekit-passive-color-6)',
      'passive-super-light': 'var(--sn-stylekit-passive-color-super-light)',
      'accessory-tint-1': 'var(--sn-stylekit-accessory-tint-color-1)',
      'accessory-tint-2': 'var(--sn-stylekit-accessory-tint-color-2)',
      'accessory-tint-3': 'var(--sn-stylekit-accessory-tint-color-3)',
      'accessory-tint-4': 'var(--sn-stylekit-accessory-tint-color-4)',
      'accessory-tint-5': 'var(--sn-stylekit-accessory-tint-color-5)',
      'accessory-tint-6': 'var(--sn-stylekit-accessory-tint-color-6)',
    },
  },
  safelist: [
    'text-accessory-tint-1',
    'text-accessory-tint-2',
    'text-accessory-tint-3',
    'text-accessory-tint-4',
    'text-accessory-tint-5',
    'text-accessory-tint-6',
    'border-accessory-tint-1',
    'border-accessory-tint-2',
    'border-accessory-tint-3',
    'border-accessory-tint-4',
    'border-accessory-tint-5',
    'border-accessory-tint-6',
  ],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('pointer-coarse', '@media (pointer: coarse)')
    }),
  ],
}
