import axios from 'axios'
import { API_URL } from '../../../../application/common/global'

export default {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/sample-endpoint`)

    return response.data.data
  },
}
