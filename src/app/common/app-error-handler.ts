import { ErrorHandler } from '@angular/core';

// responsible for handling unexpected errors globally

export class AppErrorHandler implements ErrorHandler{
	handleError(error){
		alert("An unexpected error occured");
        console.log(error);
	}
}