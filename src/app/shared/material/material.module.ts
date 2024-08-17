import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  exports: [...materialModules],
})
export class MaterialModule {}
