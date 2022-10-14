
import { Expose, Type } from "class-transformer"
export class User
{
id?:string
@Expose({name:'hire_date'})
@Type(()=>Date)
hireDate:Date

@Expose({name:'position_name'})
positionName:string
  constructor(
	
    public name:string = '',
    public phone:string = '',
		public email:string = '',
		public address:string = '',
		positionName:string = '',
		public department:string = '',
		hireDate:Date = new Date()
){
  this.hireDate = hireDate
  this.positionName = positionName
}

}
