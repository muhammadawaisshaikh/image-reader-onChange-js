// read product image onChange Typerscript
  readProductImageURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      const file = (<HTMLInputElement>event.target).files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageProductSrc = reader.result as string;

      reader.readAsDataURL(file);
    }
  }
