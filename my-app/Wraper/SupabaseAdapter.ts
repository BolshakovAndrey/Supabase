import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { DatabaseAdapter }  from "./DatabaseAdapter";

export default class SupaBaseAdapter implements DatabaseAdapter {
    private client: SupabaseClient;

    constructor() {
        const supaBaseUrl = "https://ovrlgavxrimsbzasyyam.supabase.co";
        const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cmxnYXZ4cmltc2J6YXN5eWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4OTE0NjAsImV4cCI6MjAyMzQ2NzQ2MH0.YFi95zEJjvxJowPYw3dsElpfEKauxmXx111CV7HUrgk";
        this.client = createClient(supaBaseUrl, supaBaseAnonKey);
    }

    async globalGetCountries(): Promise<any[]> {
        const { data, error } = await this.client
            .from("countries")
            .select();
        if (error) throw new Error(error.message);
        return data;
    }

    async globalInsertCountry(data: Record<string, any>): Promise<void> {
        const { error } = await this.client
            .from('countries')
            .insert(data);
        if (error) throw new Error(error.message);
    }

    async globalDeleteCountry(condition: Record<string, any>): Promise<void> {
        const { error } = await this.client
            .from('countries')
            .delete()
            .match(condition);
        if (error) throw new Error(error.message);
    }
}
