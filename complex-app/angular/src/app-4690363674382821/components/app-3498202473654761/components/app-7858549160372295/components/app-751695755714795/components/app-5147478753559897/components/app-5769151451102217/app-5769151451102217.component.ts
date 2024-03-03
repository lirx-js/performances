import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5769151451102217',
  standalone: true,
  templateUrl: './app-5769151451102217.component.html',
  styleUrl: './app-5769151451102217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5769151451102217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
