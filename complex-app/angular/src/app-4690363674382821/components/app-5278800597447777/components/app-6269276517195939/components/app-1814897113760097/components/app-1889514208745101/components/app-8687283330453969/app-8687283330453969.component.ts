import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8687283330453969',
  standalone: true,
  templateUrl: './app-8687283330453969.component.html',
  styleUrl: './app-8687283330453969.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8687283330453969Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
