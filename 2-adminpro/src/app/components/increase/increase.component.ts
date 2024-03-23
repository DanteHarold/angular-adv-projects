import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styles: ``,
})
export class IncreaseComponent implements OnInit {
  //*Emitir Valores
  @Input('valor')
  progress: number = 50;
  @Input()
  btnClass: string = 'btn-primary';

  @Output()
  outValue: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  changeValue(value: number) {
    console.log(value, this.progress);
    if (this.progress >= 100 && value >= 0) {
      this.outValue.emit(100);
      this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      console.log('HOLA');
      this.outValue.emit(0);
      this.progress = 0;
    }
    this.progress = this.progress + value;
    this.outValue.emit(this.progress);
  }

  onChange(value: number) {
    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.outValue.emit(value);
  }
}
