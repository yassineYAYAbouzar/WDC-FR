import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../../service/responsable/responsable.service';

@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {

  listResponsable : any
  constructor(private responsableService : ResponsableService) { }

  ngOnInit(): void {
    this.responsableService.fetchResponsableList().subscribe(res=>{
      this.listResponsable = res
    })
  }

  update(respo : any){
    console.log(respo)
  }
  delete(respo : any){
    console.log(respo)
  }
}
