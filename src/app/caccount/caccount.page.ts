import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caccount',
  templateUrl: './caccount.page.html',
  styleUrls: ['./caccount.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CaccountPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Si el email y password son v{NG_ASYNC_VALIDATORS, muestra un mensaje de éxito
    if (this.validateEmail(email) && password){
      const alert = await this.alertController.create({
        header: 'reser Success',
        message: 'You have reseted successfully!',
        buttons: ['OK'],
    });
      await alert.present();
    } else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all',
        buttons: ['OK'],
      });
      await alert.present();
    }

  }
// Funcion para validar el formato del compileDeferResolverFunction
validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email); // Retorna true si el correo es valido
}

onSignUp() {
  this.router.navigateByUrl('login');
}


}

