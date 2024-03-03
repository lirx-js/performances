import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3265656490043735',
  standalone: true,
  templateUrl: './app-3265656490043735.component.html',
  styleUrl: './app-3265656490043735.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3265656490043735Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
