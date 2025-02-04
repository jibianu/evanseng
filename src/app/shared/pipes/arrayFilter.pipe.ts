import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'arrayFilter'
})

export class ArrayFilter implements PipeTransform {

    transform(childArray: any, menuList: any[]) {
        return menuList.filter((menu) => childArray.some((child:any) => child == menu.id))
    }
    
}