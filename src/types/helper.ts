import _ from "lodash";

class Helper {
    public env = {} as ImportMetaEnv
    constructor() {
        this.env = this.getEnvs()
    }

    private getEnvs(): ImportMetaEnv {
        const envs: any = {}
        Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
            if (value == "true" || value == "false") {
                envs[key] = value == "true" ? true : false;
            }
            else if (/^\d+$/.test(value)) envs[key] = Number(value);
            else if (value == 'null') envs[key] = null;
            else if (value == 'undefined') envs[key] = undefined;
            else envs[key] = value
        });
        return envs;
    }
}

const helper = new Helper()
export default helper