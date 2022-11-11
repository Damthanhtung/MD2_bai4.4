import {Rectangle} from "./Rectangle";
export class Square extends Rectangle {
    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }
    getSide(): number {
        return this.getWidth();
    }
    setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width: number) :void{
        this.setSide(width);
    }
    setLength(length: number):void {
        this.setSide(length);
    }
    public toString(): string {
        return "A Square with side = "
        + this.getSide()
        + ", Which is a subclass of "
        + super.toString()
    }
}