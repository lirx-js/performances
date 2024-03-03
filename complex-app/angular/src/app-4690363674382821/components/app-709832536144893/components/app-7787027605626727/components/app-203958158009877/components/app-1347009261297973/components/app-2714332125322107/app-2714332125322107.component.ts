import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2714332125322107',
  standalone: true,
  templateUrl: './app-2714332125322107.component.html',
  styleUrl: './app-2714332125322107.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2714332125322107Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
