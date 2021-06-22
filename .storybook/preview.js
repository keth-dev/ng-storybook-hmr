import '!style-loader!css-loader!sass-loader!../projects/my-ui-lib/src/lib/styles.scss';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
