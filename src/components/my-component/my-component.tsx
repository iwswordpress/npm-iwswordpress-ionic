import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() firstName: string;

  /**
   * The middle name
   */
  @Prop() middleName: string;

  /**
   * The last name
   */
  @Prop() lastName: string;

  private getText(): string {
    return format(this.firstName, this.middleName, this.lastName);
  }

  render() {
    return <div>This is the basic stencil file: {this.getText()}</div>;
  }
}
