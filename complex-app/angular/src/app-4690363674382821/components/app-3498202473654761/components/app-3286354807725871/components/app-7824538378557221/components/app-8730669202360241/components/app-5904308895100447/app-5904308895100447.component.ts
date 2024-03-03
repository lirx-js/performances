import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5904308895100447',
  standalone: true,
  templateUrl: './app-5904308895100447.component.html',
  styleUrl: './app-5904308895100447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5904308895100447Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
