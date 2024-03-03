import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5619225937884393',
  standalone: true,
  templateUrl: './app-5619225937884393.component.html',
  styleUrl: './app-5619225937884393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5619225937884393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
