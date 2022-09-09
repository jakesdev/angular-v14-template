export const ENDPOINTS: Record<string, string> = {
    // Admin
    ADMIN: '/admin',
    ADMIN_LOGIN: '/admin/login',

};

export class PageUrlHelper {
    public static RETURN_URL_PROPERTY: string = 'returnUrl';

    //#region URL
    public static isUrlExisted(url: string): boolean {
        if (!url) {
            return false;
        }
        //
        return Object.keys(ENDPOINTS).some((endpointName: string) => {
            return url.startsWith(ENDPOINTS[endpointName]);
        });
    }


}
