import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1152016075619361',
  standalone: true,
  templateUrl: './app-1152016075619361.component.html',
  styleUrl: './app-1152016075619361.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1152016075619361Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
