import { ToastController } from "@ionic/angular";

export class Toast{

  constructor(private toastController: ToastController){}

  private async toast(color: string, message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  info = (message) => this.toast("primary", message);
  error = (message) => this.toast("danger", message);
  success = (message) => this.toast("success", message);

}
