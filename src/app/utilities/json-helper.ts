export class JsonHelper {
    static parse(params: {
        value: string;
        valueType?: 'string' | 'number' | 'object' | 'array';
    }) {
        if (!params) {
            return null;
        }
        //
        let parsedValue: any;
        try {
            switch (params.valueType) {
                case 'number':
                    parsedValue = JSON.parse(params.value);
                    return typeof parsedValue === 'number' ? parsedValue : null;
                case 'object':
                    parsedValue = JSON.parse(params.value);
                    return typeof parsedValue === 'object' ? parsedValue : {};
                case 'array':
                    parsedValue = JSON.parse(params.value);
                    return Array.isArray(parsedValue) ? parsedValue : [];
                case 'string':
                default:
                    return typeof params.value === 'string' ? params.value : '';
            }
        } catch {
            switch (params.valueType) {
                case 'number':
                    return null;
                case 'object':
                    return {};
                case 'array':
                    return [];
                case 'string':
                default:
                    return '';
            }
        }
    }
}
