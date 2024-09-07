import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-previous',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  `,
  styles: ':host { display:flex; }',
})
export class IconPreviousComponent {}