import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8238868753966851',
  standalone: true,
  templateUrl: './app-8238868753966851.component.html',
  styleUrl: './app-8238868753966851.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8238868753966851Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
