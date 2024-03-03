import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8174218841195047',
  standalone: true,
  templateUrl: './app-8174218841195047.component.html',
  styleUrl: './app-8174218841195047.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8174218841195047Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
