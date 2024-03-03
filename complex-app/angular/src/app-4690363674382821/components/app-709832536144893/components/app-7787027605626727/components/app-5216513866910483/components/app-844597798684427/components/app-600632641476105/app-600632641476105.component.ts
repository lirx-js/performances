import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-600632641476105',
  standalone: true,
  templateUrl: './app-600632641476105.component.html',
  styleUrl: './app-600632641476105.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App600632641476105Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
