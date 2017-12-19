import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public text: string = '';

  @ViewChild('alertCtrl') alertCtrl: { nativeElement: AlertController };

  ngOnInit() {
    setTimeout(() => this.text = 'Lorem Ipsum!', 0);
  }

  showAlert() {
    this.alertCtrl.nativeElement
      .create({
        title: 'Alert',
        message: 'Lorem Ipsum!',
        buttons: ['Close']
      })
      .then(alert => alert.present())
  }
}
