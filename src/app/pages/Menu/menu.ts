import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, Button],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu.html',
})
export class menuComponent {}