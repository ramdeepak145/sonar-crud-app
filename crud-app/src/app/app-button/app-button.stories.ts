import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { AppButtonComponent } from './app-button.component';
import { FormBuilder } from '@angular/forms';
// This exports the Stories group for this component
export default {
  
  title: 'AppButtonComponent',
  component: AppButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppButtonComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<AppButtonComponent> = () => ({
  component: AppButtonComponent,
  template: `<app-app-button></app-app-button>`,
});
export const Base = Template.bind({});