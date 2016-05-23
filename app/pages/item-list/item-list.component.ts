import {Component, ViewChild, ElementRef} from "@angular/core";
import {RouteParams} from "@angular/router-deprecated";
import {ItemList} from "../../shared/item/item-list";
import {Item} from "../../shared/item/item";

@Component({
    selector: "items",
    templateUrl: "./pages/item-list/item-list.html",
    styleUrls: ["./pages/item-list/item-list-common.css", "./pages/item-list/item-list.css"]    
})

export class ItemListPage{
    itemList: ItemList;
    currentItem: Item;
    @ViewChild("itemField") itemField: ElementRef;
    
    constructor(params: RouteParams){
        //this.itemList = itemList;
        //this.currentItem = new Item();
    }
    
    add(){
        if(this.currentItem.description)
        {
            let item = new Item();
            item.description = this.currentItem.description;
            this.itemList.items.unshift(item);   
            this.currentItem.description= "";     
        }
    }
}