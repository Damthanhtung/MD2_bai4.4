import {Shape} from "./Shape";
export class Rectangle extends Shape {
    private _width: number = 1.0;
    private _length: number = 1.0;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(value: number) {
        this._width = value;
    }

    getLength(): number {
        return this._length;
    }

    setLength(value: number) {
        this._length = value;
    }
    getArea(): number {
        return this._length * this._width;
    }
    getParameter(): number {
        return (this._width+this._length)*2;
    }
    public toString(): string {
        return "A Rectangle with width = "
        +this.getWidth()
        + " and length "
        + this.getLength()
        + ", Which is a subclass of "
        + super.toString();
    }
}