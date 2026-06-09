import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: "average"
})
export class AveragePipe implements PipeTransform{
    transform(value: number[]): number {
        let sum = value.reduce((acumulate, current)=>{ return acumulate + current}, 0);
        return sum/value.length;
    }
}