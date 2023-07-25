import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../consts/api.consts';
import {MenuItem} from './menu-item.interface';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private http = inject(HttpClient);

    private menuItems$: Observable<MenuItem[]> = this.http.get<MenuItem[]>(`${API_URL}/menu-items`);

    menuItems = toSignal(this.menuItems$, { initialValue: [] as MenuItem[] });
}
