import { TargetOptions } from '@angular-builders/custom-webpack';
import { minify } from 'html-minifier';

export default (targetOptions: TargetOptions, indexHtml: string) =>
  minify(indexHtml, {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
  });
