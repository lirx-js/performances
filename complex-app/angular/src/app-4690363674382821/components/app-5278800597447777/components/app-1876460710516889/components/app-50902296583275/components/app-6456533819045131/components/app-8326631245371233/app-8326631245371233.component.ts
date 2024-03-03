import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8326631245371233',
  standalone: true,
  templateUrl: './app-8326631245371233.component.html',
  styleUrl: './app-8326631245371233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8326631245371233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
