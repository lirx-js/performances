import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8548289782136007',
  standalone: true,
  templateUrl: './app-8548289782136007.component.html',
  styleUrl: './app-8548289782136007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8548289782136007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
