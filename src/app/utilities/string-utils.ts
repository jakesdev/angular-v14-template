declare global {
    // eslint-disable-next-line id-blacklist
    interface String {
        toUTCString: () => string;
        toTitleCase: () => string;
        removeAllSpecialCharacter: () => string;
        toLowerCaseFirstChar: () => string;
        toUpperCaseFirstChar: () => string;

        format(...replacements: any[]): string;
    }
}

/* eslint-disable */
String.prototype.format = function(): string {
    const args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

String.prototype.toUTCString = function (): string {
    const date = new Date(this);

    return date.toUTCString();
};

String.prototype.toTitleCase = function (): string {
    return this.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};

String.prototype.removeAllSpecialCharacter = function (): string {
    return this.replace(/[^a-zA-Z0-9]/g, '');
};

String.prototype.toLowerCaseFirstChar = function (): string {
    return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.toUpperCaseFirstChar = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


export class StringHelper {
    public static isValueEmpty(text: string): boolean {
        return !text || !text.trim();
    }

    public static isValueChanged(currentValue: string, oldValue: string): boolean {
        if (currentValue === oldValue) {
            return false;
        }
        //
        try {
            switch (true) {
                case currentValue == null && oldValue == null:
                    return false;
                // null and '' -> no changed
                case currentValue == null && this.isValueEmpty(oldValue):
                case oldValue == null && this.isValueEmpty(currentValue):
                    return false;
                case currentValue == null && !this.isValueEmpty(oldValue):
                case oldValue == null && !this.isValueEmpty(currentValue):
                    return true;
                default:
                    return currentValue.trim() !== oldValue.trim();
            }
        } catch {
            return false;
        }
    }
}

