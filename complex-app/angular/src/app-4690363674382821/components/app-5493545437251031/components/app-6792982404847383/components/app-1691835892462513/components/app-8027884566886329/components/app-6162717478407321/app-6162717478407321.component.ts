import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6162717478407321',
  standalone: true,
  templateUrl: './app-6162717478407321.component.html',
  styleUrl: './app-6162717478407321.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6162717478407321Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}