import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell, MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {TableColumn} from './table-column.model';
import {JsonPipe} from '@angular/common';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatTable,
        MatHeaderCellDef,
        JsonPipe
    ],
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> {

    rows = input.required<T[]>();
    columns = input.required<TableColumn[]>();

    columnIdentifiers = computed(() => {
        return this.columns().map(column => column.identifier);
    });
}
