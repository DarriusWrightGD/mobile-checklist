import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {ItemListPage} from "./pages/item-list/item-list.component";
import {ItemListsPage} from "./pages/item-lists/item-lists.component";

@Component({
    selector: "main",
      directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})

@RouteConfig([
  { path: "/ItemList", component: ItemListPage, name: "ItemList"},
  { path: "/ItemLists", component: ItemListsPage, name: "ItemLists", useAsDefault: true}
])

export class AppComponent {}
