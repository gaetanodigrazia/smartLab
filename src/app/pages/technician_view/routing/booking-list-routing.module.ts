import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from '../booking-list/booking-list.component';

const routes: Routes = [{
    path: '',
    component: BookingListComponent,
    children: [
    ],
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookingListRoutingModule { }

export const routedComponents = [
    BookingListComponent,
];
