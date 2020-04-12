import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/inventory',     title: 'Inventario',        icon:'nc-bank',       class: '' },
    { path: '/quote',         title: 'Cotizaciones',      icon:'nc-tile-56',       class: '' },
    { path: '/storage',       title: 'Archivos',          icon:'nc-diamond',    class: '' },
    { path: '/mail',          title: 'Correo',            icon:'nc-pin-3',      class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
