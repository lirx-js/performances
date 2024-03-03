import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8457842470253453',
  standalone: true,
  templateUrl: './app-8457842470253453.component.html',
  styleUrl: './app-8457842470253453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8457842470253453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
