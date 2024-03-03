import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8964012071434421',
  standalone: true,
  templateUrl: './app-8964012071434421.component.html',
  styleUrl: './app-8964012071434421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8964012071434421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
