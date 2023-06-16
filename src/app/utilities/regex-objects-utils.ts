/**
 * NOTE: Should Create an Instance of RegExp when using APP_REGEX
 */
export const APP_REGEX = {
    // Text-area
    NEW_LINE: /\r\n|\r|\n/g,
    END_OF_LINE: /\r\n/g,
    LINE_FEED: /\n/g,
    CARRIAGE_RETURN: /[\r]/g,
    NEW_LINE_AND_SPACE: /\r\n|\r|\n/g,
    // HTML Editor
    HTML_TAGS: /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/ig,
    HTML_BR_TAG_ONLY: /<br.*?>/g,
    HTML_STYLE_TAG_ONLY: /<style.*?>.*?<\/style>/g,
    HTML_COMMENT_TAG_ONLY: /<!--.*?-->/sg,
    // URL
    URL_PROTOCOL_INCLUDES: /(?:(?:https|http):\/\/)/,
    URL_PROTOCOL_START_WITH: /^(?:(?:https|http):\/\/)/,
    URL_HTTPS_AND_HTTP_VALIDATION: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63}(:[0-9]{1,5})?(\/.*)?\s*$/,
    URL_HTTPS_ONLY_VALIDATION: /^(https:\/\/www\.|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63}(:[0-9]{1,5})?(\/.*)?\s*$/,
    // Email
    EMAIL_DOMAIN_REGEX: '(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]'
};

export class RegexObject {
    public static checkOnlyNumbers(value: string): boolean {
        return new RegExp('^[0-9]*$').test(value);
    }

    public static checkOnlyLettersAndSymbols(value: string): boolean {
        return new RegExp('^[a-zA-Z\\/~`!@#$%^&+={}\\-\\[\\]*_)(|:;,.\'?<>]*$').test(value);
    }

    public static checkEmailIsValid(email: string): boolean {
        const regexCheckEmail = /^[\d\w._-]+@([\d\w._-]+\.)+[\w]+$/i;
        return regexCheckEmail.test(email);
    }

    public static checkOnlyPhoneNumber(phoneNumberKey: string): boolean {
        return new RegExp('^[+]*[(]*[)]*[-]*[ ]*[.]*[0-9]*$').test(phoneNumberKey);
    }

    public static isE164Format(phoneNumber: string): boolean {
        return new RegExp('^\\+[1-9]\\d{1,14}$').test(phoneNumber);
    }

    // check the input is a string of special character.
    public static checkOnlySpecialCharacters(name: string): boolean {
        return new RegExp('^[*-.#_@]*$').test(name);
    }

    public static checkOnlyNumbersAndCharacters(name: string): boolean {
        return new RegExp('^[a-zA-Z0-9]+$').test(name);
    }

    public static checkOnlyNumbersAndCharactersAndWhiteSpace(name: string): boolean {
        return new RegExp('^[a-zA-Z0-9 ]+$').test(name);
    }

    // Only Numbers And Characters And Asterisk. 10 symbols.
    public static verifySearchPattern(name: string): boolean {
        return new RegExp('[a-zA-Z0-9*]{10}$').test(name);
    }

    public static checkExistSpecialCharacters(value: string): boolean {
        return new RegExp('^[a-zA-Z0-9-.#_@/\+!%^&$,;:]+$').test(value);
    }

    public static checkPhoneNumberUSA(number_value: string): boolean {
        return new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$').test(number_value);
    }

    public static checkFormatedPhoneNumber(number_value: string): boolean {
        return new RegExp('^[0-9]{10}$').test(number_value) || new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$').test(number_value);
    }

    public static checkFormatCard(number_value: string): boolean {
        return new RegExp(
            '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$')
            // '^[0-9]+$')
            .test(number_value);
    }

    public static checkFormatVisaCard(number_value: string): boolean {
        return new RegExp(
            '^4[0-9]{12}(?:[0-9]{3})?$')
            .test(number_value);
    }

    public static checkFormatMasterCard(number_value: string): boolean {
        return new RegExp(
            '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$')
            .test(number_value);
    }

    public static checkFormatAmexCard(number_value: string): boolean {
        return new RegExp(
            '^3[47][0-9]{13}$')
            .test(number_value);
    }

    public static checkDuplicateFormat(number_value: string): boolean {
        return new RegExp(
            '[-,]{2,}')
            .test(number_value);
    }

    public static checkFormatJCBCard(number_value: string): boolean {
        return new RegExp(
            '^(?:2131|1800|35\\d{3})\\d{11}$')
            .test(number_value);
    }

    public static CheckFormatDiscoverCard(number_value: string): boolean {
        return new RegExp(
            '^6(?:011|5[0-9]{2})[0-9]{12}$')
            .test(number_value);
    }

    public static checkFormatDinerClubCard(number_value: string): boolean {
        return new RegExp(
            '^3(?:0[0-5]|[68][0-9])[0-9]{11}$')
            .test(number_value);
    }

    public static checkCardIsNumber(number_value: string): boolean {
        return new RegExp(
            '[^a-zA-Z-,]$')
            .test(number_value);
    }

    public static isUrlValid(value: string, httpsOnly: boolean = true): boolean {
        return httpsOnly
            ? new RegExp(APP_REGEX.URL_HTTPS_ONLY_VALIDATION).test(value)
            : new RegExp(APP_REGEX.URL_HTTPS_AND_HTTP_VALIDATION).test(value);
    }
}
