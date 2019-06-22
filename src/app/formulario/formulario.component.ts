import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormService } from 'src/app/formulario/services/form.service';
import { userInterface } from 'src/app/formulario/models/model-view-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  users : userInterface[];
  user : userInterface = {
    first_name: '',
    last_name: '',
    yearsold: 0,
    date_birth: ''
  }
  public date_dead = '';
  private pagenumber = 0;
  public edadmedia:any = 0;
  public dstandar:any = 0;
  constructor(private userService: FormService) {

  }
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  meanyear(v: any) {
    let sum: any = 0;
    for( let i: number = 0; i < v.length; i++ ) {
      sum += v[i].yearsold*1;
    }
    return sum/(v.length + 1);
  }
  next() {
    let id_element = "#next_btn" + this.pagenumber;
    let current_fs: any = $(id_element).parent();
    let next_fs: any = $(id_element).parent().next();

    this.user.first_name = $("#first_name").val();
    this.user.last_name = $("#last_name").val();
    this.user.yearsold = $("#yearsold").val();
    this.user.date_birth = $("#date_birth").val();

    if (this.user.first_name == undefined)
      this.user.first_name = '';
    if (this.user.last_name == undefined)
      this.user.last_name = '';
    if (this.user.yearsold == undefined)
      this.user.yearsold = 0;
    if (this.user.date_birth == undefined)
      this.user.date_birth = '1990-01-01';

    let d = new Date(this.user.date_birth)

    let year: number= d.getFullYear();
    let mm: number = d.getMonth();
    let dd: number = d.getDate();

    let nyear: number = year + 72;

    this.date_dead = nyear.toString() + "-" + mm.toString() + '-' + dd.toString();

    this.userService.addUser(this.user);

  	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    current_fs.hide();
  	next_fs.show();

    let lusers: any = this.users;
    let meanyear: number = this.meanyear( lusers );

    let standar : number = Math.pow( meanyear - this.user.yearsold, 2 );
    for ( let i : number = 0; i < lusers.length; i++ )
      standar += Math.pow( meanyear - lusers[i].yearsold, 2 );

    standar = Math.sqrt( standar/(lusers.length + 1) );

    this.dstandar = standar.toFixed(1);
    this.edadmedia = meanyear.toFixed(1);

    if ( ++this.pagenumber == 2 ) {

    }
  }
  previous() {
    let id_element = "#prev_btn" + this.pagenumber;
    let current_fs: any = $(id_element).parent();
    let prev_fs: any = $(id_element).parent().prev();

    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    $("#progressbar li").eq($("fieldset").index(prev_fs)).addClass("active");

    current_fs.hide();
    prev_fs.show();

    if (--this.pagenumber == 1) {

    }
  }
}
