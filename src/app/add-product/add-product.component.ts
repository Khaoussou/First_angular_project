import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

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

	public formGroup!: FormGroup;
	public file!: File;
	public imageUrl!: string;

	constructor(private productservice: ProductService) {
		this.formGroup = new FormGroup({
			libelle: new FormControl('', [Validators.required, Validators.minLength(5)],),
			description: new FormControl('', [Validators.required, Validators.minLength(5)]),
			prix: new FormControl(0, [Validators.required, Validators.min(0)]),
			quantite: new FormControl(0, [Validators.required, Validators.min(0)]),
			image: new FormControl(),
		})
	}

	public getErrorsMessage(fieldName: string, error: ValidationErrors): string | undefined {
		return this.errorMessage[fieldName + "." + Object.keys(error)[0]];
	}

	// onSubmit() {
	// 	this.http.post(this.url, this.formGroup.value).subscribe(
	// 		(response) => {
	// 			console.log(response);
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 		}
	// 	)
	// }

	onSubmit() {
		this.productservice.addProduct(this.formGroup.value).subscribe(
			(response) => {
				console.log(response);

			},
			(error) => {
				console.log(error);

			}
		)

	}
	

	onChange(event: any) {
		this.file = event.target.files[0];

		let fileReader = new FileReader();

		fileReader.readAsDataURL(this.file);

		fileReader.addEventListener("load", () => {
			this.imageUrl = fileReader.result as string;
		})
	}
}
