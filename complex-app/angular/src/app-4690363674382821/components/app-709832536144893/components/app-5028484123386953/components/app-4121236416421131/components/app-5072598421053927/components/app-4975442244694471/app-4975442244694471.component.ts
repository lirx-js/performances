import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4975442244694471',
  standalone: true,
  templateUrl: './app-4975442244694471.component.html',
  styleUrl: './app-4975442244694471.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4975442244694471Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
