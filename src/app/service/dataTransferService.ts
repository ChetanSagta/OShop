import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class DataTransferService<T>{


    private content ?: T ;

    constructor(private http: HttpClient){
    }

    setContent(content: T): void{
        this.content = content;
    }

    getContent(): T| undefined{
        return this.content;
    }


}
