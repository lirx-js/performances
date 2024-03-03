import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7141810084313683',
  standalone: true,
  templateUrl: './app-7141810084313683.component.html',
  styleUrl: './app-7141810084313683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7141810084313683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
