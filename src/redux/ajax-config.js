import fetch from 'gfetch'
fetch.interceptor.success = data => JSON.parse(data)
fetch.config.timeout = 5000

export default fetch
