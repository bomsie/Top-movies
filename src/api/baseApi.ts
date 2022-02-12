import axios, { AxiosError } from "axios";

export interface IApiResponse<T> {
    status: number,
    success: boolean,
    data?: T[],
    message?: string
}

export default class baseApi {
    _apiKey: string | undefined;

    constructor(key?: string) {
        this._apiKey = key;
    }

    setKey(key: string) {
        this._apiKey = key;
        return true;
    }

    async get<T>(url: string): Promise<IApiResponse<T>> {
        let resp: IApiResponse<T>;
        try {
            const response = await axios.get(url);
            var data = response.data as T[];
            resp = {
                data: data,
                status: response.status,
                success: true
            };
        } catch (error: any) {
            resp = {
                status: error.status ?? 500,
                success: false,
                message: error.message ?? ""
            };
        }
        return resp;
    }
}