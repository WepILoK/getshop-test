import axios from "axios";

export const Api = {
    async fetchValidate(number: number) {
        const {data} = await axios.get(`http://apilayer.net/api/validate?access_key=aeb556bd090b7bd3fc674c270d1c0dba&number=${number}&country_code = RU`)
        return data.valid
    },
}
