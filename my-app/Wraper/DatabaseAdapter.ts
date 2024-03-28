"use strict";
export interface DatabaseAdapter {
    globalGetCountries(): Promise<any[]>;
    globalInsertCountry(data: Record<string, any>): Promise<void>;
    globalDeleteCountry(condition: Record<string, any>): Promise<void>;
}
