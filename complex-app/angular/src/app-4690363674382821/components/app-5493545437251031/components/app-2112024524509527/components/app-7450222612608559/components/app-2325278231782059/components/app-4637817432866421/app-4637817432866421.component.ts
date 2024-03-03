import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4637817432866421',
  standalone: true,
  templateUrl: './app-4637817432866421.component.html',
  styleUrl: './app-4637817432866421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4637817432866421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
