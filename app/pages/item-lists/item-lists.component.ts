import {Component} from "@angular/core";
import {ItemList} from "../../shared/item/item-list";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "item-lists",
    templateUrl: "./pages/item-lists/item-lists.html",
})

export class ItemListsPage{
    itemLists: Array<ItemList> = [];
    currentItemList: ItemList;
    
    constructor(private _router:Router){
        this.currentItemList = new ItemList();
        console.log(this.itemLists);
    }
    
    add(){
        console.log("Adding another");
        if(this.currentItemList.title){
            let itemList = new ItemList();
            itemList.title = this.currentItemList.title;
            this.itemLists.unshift(itemList);
            this.currentItemList.title = "";
        }
    }
    
    select(itemList: ItemList){
        this._router.navigate(["ItemList", itemList])
    }
}