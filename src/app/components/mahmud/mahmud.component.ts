import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {ResponseModel} from '../../models/response-model';

@Component({
  selector: 'app-mahmud',
  templateUrl: './mahmud.component.html',
  styleUrls: ['./mahmud.component.scss']
})
export class MahmudComponent implements OnInit {

  success: string;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  getResponse() {
    this.restService.getResponse().subscribe((data: ResponseModel) => {
      this.success = data.success;
    });
  }

}
