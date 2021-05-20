import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  show: boolean;
  ceksatu: boolean;
  btnid: number = 0;
  constructor() { }

  ngOnInit() {
    // this.show= this.globalvar.getboolean();
  }

  clickedfav(event) {

    if (this.show == true) {
      this.btnid = event.srcElement.id;
      this.show = false;
      // alert(this.btnid);
      // alert(this.show);
      if (this.btnid == 1) {
        this.ceksatu = false;

      }
    }
    else {
      this.btnid = event.srcElement.id;
      this.show = true;
      // alert(this.btnid);
      // alert(this.show);  //pertamakali
      if (this.btnid == 1) {
        this.ceksatu = true;
      }
    }
  }

  // clickedfav2(event){

  //   if(this.show==true){
  //     this.show=false;
  //     console.log(event.srcElement.id);
  //     console.log(event.srcElement.name);
  //     alert(event.srcElement.id);
  //     alert(event.srcElement.name);
  //   }
  //   else{
  //     this.show=true;
  //     console.log(event.srcElement.id);
  //     console.log(event.srcElement.name);
  //     alert(event.srcElement.id);
  //     alert(event.srcElement.name);

  //   }
  // }

  //   clickedfav(ionicButton, btn: any) {
  //     if(this.answer == btn){
  //       ionicButton.color =  'success';
  //     } else {
  //       ionicButton.color =  'danger';
  //     }
  // }



}
