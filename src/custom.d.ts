declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module 'redux-persist/integration/react'

declare module 'redux-persist/lib/stateReconciler/autoMergeLevel2' {
  const content: any;
  export default content;
}

declare module 'next-frame' {
  const content: any;
  export default content;
}



// Type definitions for jss-preset-default 0.5.0
// Project: https://github.com/cssinjs/jss-preset-default
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/wikiwi/typeless

declare module 'jss-preset-default' {
  export type JSSPresetOptions = {
    extend?: any;
    nested?: any;
    camelCase?: any;
    defaultUnit?: any;
    vendorPrefixer?: any;
    propsSort?: any;
    compose?: any;
  };

  const preset: (opts?: JSSPresetOptions) => any;
  export default preset;
}
