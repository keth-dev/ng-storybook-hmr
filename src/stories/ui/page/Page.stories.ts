import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Page from './page.component';

import * as HeaderStories from '../header/Header.stories';
import { UiModule } from '../ui.module';
import { IconComponent, UiLibModule } from '@cssinsurance/mycss-ui-lib';

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, UiModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  component: Page,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
