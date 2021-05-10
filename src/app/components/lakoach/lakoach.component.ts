import { Component, OnInit } from '@angular/core';
import { ManageForService } from '../../services/manage-for.service';
import { yahad } from '../../types/yahad';
@Component({ 
  selector: 'app-lakoach',
  templateUrl: './lakoach.component.html',
  styleUrls: ['./lakoach.component.css']
})
export class LakoachComponent implements OnInit {
   yahads:yahad[];
  constructor(private yahad: ManageForService) {
    this.yahads = this.yahad.getYahads();
   }

  ngOnInit(): void {
  }

}
