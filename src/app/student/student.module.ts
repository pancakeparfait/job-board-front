import {NgModule} from '@angular/core';
import {StudentRoutingModule} from './student-routing.module';
import {MaterialModule} from '../material.module';

@NgModule({
    imports: [
        StudentRoutingModule,
        MaterialModule
    ],
    exports: [
    ],
    declarations: [
    ]
})

export class StudentModule {}
