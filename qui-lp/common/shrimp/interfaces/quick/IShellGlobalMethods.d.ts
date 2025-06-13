import { AlertType, ErrorSource, IActionButton } from "../ComponentInterfaces/IAlert";
import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { IDictionary } from "../IDictionary";
import { MobileAnimationType } from "./INavigationManager";
import { INetworkResponse } from "./INetworkResponse";
export interface IAlertParameters {
    ownerComponent?: IComponentCollection;
    currentPageId: string;
}
export interface IShellGlobalMethods extends IDictionary<any> {
    alert?: (options: {
        title?: string;
        text?: string;
        category?: keyof typeof AlertType;
        actionButtons?: Array<IActionButton>;
        error?: {
            errorMessage?: string;
            errorCode?: string;
            errorSource?: keyof typeof ErrorSource;
            response?: INetworkResponse;
        };
    }, parameters: IAlertParameters) => void;
    closeAlert?: () => void;
    getDeepLinkParams: () => Record<string, string | undefined>;
    goNative?: ({ code, param, mobileAnimation }: {
        code: string;
        param?: Record<string, any>;
        mobileAnimation?: MobileAnimationType;
    }) => void;
}
//# sourceMappingURL=IShellGlobalMethods.d.ts.map