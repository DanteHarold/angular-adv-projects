import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseComponent } from './increase/increase.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IncreaseComponent],
  imports: [CommonModule, FormsModule],
  exports: [IncreaseComponent],
})
export class ComponentsModule {}
