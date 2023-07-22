import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  public formGroup!: FormGroup;
  private errorMessage: any = {
		"libelle.required": "Le libelle est requis",
		"libelle.minlength": "Le libelle doit etre au minimum 5 caractéres",
		"description.required": "La description est requise",
		"description.minlength": "La description doit etre au minimum 5 caractéres",
		"prix.required": "Le prix est requis",
		"prix.min": "Le prix doit etre positif",
		"quantite.required": "La quantite est requise",
		"quantite.min": "La quantite doit etre positive"
	}

  constructor(private productservice:ProductService){
    this.formGroup = new FormGroup({
			libelle: new FormControl('', [Validators.required, Validators.minLength(5)],),
			description: new FormControl('', [Validators.required, Validators.minLength(5)]),
			prix: new FormControl(0, [Validators.required, Validators.min(0)]),
			quantite: new FormControl(0, [Validators.required, Validators.min(0)]),
			image: new FormControl(),
    })
    
  }
   
  // update()
  // {
  //   this.productservice.updateProduct()
  // }
  public getErrorsMessage(fieldName: string, error: ValidationErrors): string | undefined {
		return this.errorMessage[fieldName + "." + Object.keys(error)[0]];
  }
  onSubmit(){}

}
