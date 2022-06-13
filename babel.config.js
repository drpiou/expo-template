module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@/api': './src/api',
            '@/assets': './src/assets',
            '@/base': './src/..',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/contexts': './src/contexts',
            '@/hoc': './src/hoc',
            '@/hooks': './src/hooks',
            '@/lib': './src/lib',
            '@/locales': './src/locales',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/src': './src',
            '@/state': './src/state',
            '@/themes': './src/themes',
            '@/types': './src/types',
            '@/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
