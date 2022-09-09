
declare global {
    // eslint-disable-next-line id-blacklist
    interface Number {
        toFormat: () => string;
        toFormatIntegerNumber: () => string;
        round: (decimal: number) => number;

        isIntegerNumber: () => boolean;
    }
}

Number.prototype.toFormatIntegerNumber = function(): string {
    // format number 1234567 to 1,234,567
    return `${this as number}`.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// TODO: Remove later and use NumberHelper.formatToString
Number.prototype.toFormat = function(format: string = '#,###'): string {
    if (this < 1000) {
        return this;
    }
    //
    switch (format) {
        case '#,###':
            return this.toFormatIntegerNumber();
        case '#,###.#':
            const numberArr: string[] = this.toString().split('.');
            const floatPart: string = numberArr.length === 2 ? numberArr[1] : null;
            return floatPart
                ? parseFloat(numberArr[0]).toFormatIntegerNumber() + '.' + floatPart
                : parseFloat(numberArr[0]).toFormatIntegerNumber() + '.' + '00';
        default:
            return this;
    }
};

Number.prototype.round = function(decimal: number): number {
    return Math.round(this * Math.pow(10, decimal)) / Math.pow(10, decimal);
};

Number.prototype.isIntegerNumber = function(): boolean {
    return typeof this === 'number' && !isNaN(this as number) && Number.isInteger(this);
};

export {};

export class NumberHelper {
    public static formatToString(params: { format: '#,###' | '#,###.#' | 'integerOrDecimal'; value: number }): string {
        if (typeof params.value !== 'number') {
            return params.value;
        }
        //
        let numberArr: string[] = [];
        let floatPart: string;
        switch (params.format) {
            case '#,###':
                if (params.value < 1000) {
                    return `${params.value}`;
                }
                return params.value.toFormatIntegerNumber();
            case '#,###.#':
                if (params.value < 1000) {
                    return params.value.toString().includes('.') ? `${params.value}` : `${params.value}.00`;
                }
                numberArr = params.value.toString().split('.');
                floatPart = numberArr.length === 2 ? numberArr[1] : null;

                return floatPart
                    ? parseFloat(numberArr[0]).toFormatIntegerNumber() + '.' + floatPart
                    : parseFloat(numberArr[0]).toFormatIntegerNumber() + '.' + '00';
            case 'integerOrDecimal':
                if (params.value < 1000) {
                    return `${params.value}`;
                }
                //
                numberArr = params.value.toString().split('.');
                floatPart = numberArr.length === 2 ? numberArr[1] : null;
                return floatPart
                    ? parseFloat(numberArr[0]).toFormatIntegerNumber() + '.' + floatPart
                    : parseFloat(numberArr[0]).toFormatIntegerNumber();
            default:
                return `${params.value}`;
        }
    }

    public static allowToTypePositiveNumberOnly(params: { event: KeyboardEvent }): void {
        if (params.event.key === '-') {
            params.event.preventDefault();
        }
    }

    public static allowToTypeIntegerNumberOnly(params: { event: KeyboardEvent }) {
        if (params.event.key === '-' || params.event.key === '.' || params.event.key === ',') {
            params.event.preventDefault();
        }
    }
}
