import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1212400282223923',
  standalone: true,
  templateUrl: './app-1212400282223923.component.html',
  styleUrl: './app-1212400282223923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1212400282223923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
