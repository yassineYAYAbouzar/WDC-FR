import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../../../service/responsable/responsable.service';
import { AppError } from '../../../common/app-error';
import { NotFoundErrorPage } from '../../../common/not-found';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-responsable-list',
  templateUrl: './responsable-list.component.html',
  styleUrls: ['./responsable-list.component.css']
})
export class ResponsableListComponent implements OnInit {

  listResponsable : any
  constructor(private responsableService : ResponsableService) { }

  ngOnInit(): void {
    this.responsableService.fetchDataList().subscribe(res=>{
      this.listResponsable = res
    },(error : AppError) =>{
      if(error instanceof NotFoundErrorPage){
        let timerInterval:any
        Swal.fire({
          title: 'alert! Will closed automaticly',
          html: 'No Responsable yeat !',
          icon: 'warning',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
      }
    })
  }

  delete(respo : any){
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sur you want delete this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.responsableService.deleteData(respo).subscribe(res=>{
          console.log(respo)
          this.listResponsable.splice(this.listResponsable.indexOf(res))
        },(error : AppError) =>{
          if(error instanceof NotFoundErrorPage){
            Swal.fire(
              'Deleted!',
              'This Responsable has been Not deleted.',
              'error'
            )
          }else{
            Swal.fire(
              'Deleted!',
              'Responsable has been deleted.',
              'success'
            )
          }
        })
      }
    })
    
  }
  
}
