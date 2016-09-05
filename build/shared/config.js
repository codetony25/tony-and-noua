export const isProduction =
  process.argv.includes('--release') ||
  process.argv.includes('--production') ||
  process.env.NODE_ENV === 'production';

export const isDevelopment =
  !process.argv.includes('--release') ||
  process.env.NODE_ENV === 'development';

const config = {
  globals: {
    'process.env.NODE_ENV': isDevelopment ? '"development"' : '"production"',
    __DEV__: isDevelopment
  },
  __DEV__: isDevelopment,
  __PROD__: isProduction,
  autoprefixerBrowsers: [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
  ],
  routes: [
    '/',
    '/contact',
    '/login',
    '/register',
    '/about',
    '/privacy',
    '/404'
  ],
  isCompileLifecycle:
    process.env.npm_lifecycle_event === 'compile',
  isCompileStaticLifecycle:
    process.env.npm_lifecycle_event.includes('compile:static'),
  isCompileCopyStaticLifecycle:
    process.env.npm_lifecycle_event.includes('compile:copy'),
  isCompileBundleLifecycle:
    process.env.npm_lifecycle_event.includes('compile:bundle'),
  isCleanLifecycle:
    process.env.npm_lifecycle_event.includes('clean'),
  isStaticFlag: process.argv.includes('--static'),
  isVerboseFlag: process.argv.includes('--verbose')
};

export default config;
