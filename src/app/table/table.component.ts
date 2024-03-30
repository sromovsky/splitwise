import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TableColumn} from './table-column.type';
import {JsonPipe} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        JsonPipe,
        TranslateModule
    ],
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> {

    rows = input.required<T[]>();
    columns = input.required<TableColumn<T>[]>();
}
