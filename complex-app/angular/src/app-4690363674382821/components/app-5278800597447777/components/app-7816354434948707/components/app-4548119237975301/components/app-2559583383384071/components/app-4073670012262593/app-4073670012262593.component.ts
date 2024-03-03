import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4073670012262593',
  standalone: true,
  templateUrl: './app-4073670012262593.component.html',
  styleUrl: './app-4073670012262593.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4073670012262593Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
