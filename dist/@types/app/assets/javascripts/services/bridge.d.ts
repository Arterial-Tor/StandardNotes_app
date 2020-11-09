import { PurePayload, Environment } from 'snjs';
/** Platform-specific (i-e Electron/browser) behavior is handled by a Bridge object. */
export interface Bridge {
    readonly appVersion: string;
    environment: Environment;
    getKeychainValue(): Promise<unknown>;
    setKeychainValue(value: any): Promise<void>;
    clearKeychainValue(): Promise<void>;
    extensionsServerHost?: string;
    syncComponents(payloads: PurePayload[]): void;
    onMajorDataChange(): void;
    onInitialDataLoad(): void;
    onSearch(text?: string): void;
    downloadBackup(): void;
}
export declare class BrowserBridge implements Bridge {
    appVersion: string;
    constructor(appVersion: string);
    environment: Environment;
    getKeychainValue(): Promise<unknown>;
    setKeychainValue(value: any): Promise<void>;
    clearKeychainValue(): Promise<void>;
    /** No-ops */
    syncComponents(): void;
    onMajorDataChange(): void;
    onInitialDataLoad(): void;
    onSearch(): void;
    downloadBackup(): void;
}
