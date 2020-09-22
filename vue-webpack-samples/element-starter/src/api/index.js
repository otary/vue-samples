import axios from 'axios'


function getStaticJsonFile(filePath) {
    return axios.get('static/' + filePath, {
        responseType: "json"
    });
}

export default {
    getStaticJsonFile
}