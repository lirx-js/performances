import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8877861887718225',
  standalone: true,
  templateUrl: './app-8877861887718225.component.html',
  styleUrl: './app-8877861887718225.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8877861887718225Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
