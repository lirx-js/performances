import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6309360837335585',
  standalone: true,
  templateUrl: './app-6309360837335585.component.html',
  styleUrl: './app-6309360837335585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6309360837335585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
