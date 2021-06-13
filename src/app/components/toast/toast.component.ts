import { ToastService } from './../../service/toast.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }

  isTemplate(toast: any): boolean { return toast.textOrTpl instanceof TemplateRef; }

}
