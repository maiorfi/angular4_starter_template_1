import { Injectable } from "@angular/core";

@Injectable()
export class MyService {

    public sum(a: number, b: number): number {
        return a + b;
    }

    public sumAsync(a: number, b: number): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(a + b), 1000);
        });
    }
}
