import{
    Component,OnInit }from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

import {ProductService} from './product.service';
@Component({
    moduleId:module.id,
    selector:'pm-products',
    templateUrl:'product-list.component.html',
    styleUrls: ['product-list.component.css'],

    
})
export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product List';
    imageWidth:number = 50;
    imageMargin: number = 2;
    showImage: Boolean = false; 
    listFilter: string;
    products:IProduct[];
    errorMessage:string;

    constructor(private _productService: ProductService) {}

    toggleImage():void {
        this.showImage = !this.showImage;

    }
    ngOnInit():void{
        this._productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);

        // this.products = this._productService.getProducts();
        // console.log('In Onint');
    }
    onRatingClicked(message:string):void {

        this.pageTitle = 'ProductList' + message;
    }

}