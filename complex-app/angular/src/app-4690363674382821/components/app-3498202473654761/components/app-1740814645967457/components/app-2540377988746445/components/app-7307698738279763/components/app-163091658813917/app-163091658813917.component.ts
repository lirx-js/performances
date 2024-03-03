import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-163091658813917',
  standalone: true,
  templateUrl: './app-163091658813917.component.html',
  styleUrl: './app-163091658813917.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App163091658813917Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
