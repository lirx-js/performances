import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6860074814080501',
  standalone: true,
  templateUrl: './app-6860074814080501.component.html',
  styleUrl: './app-6860074814080501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6860074814080501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
