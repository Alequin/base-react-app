const handleRequestForJavascriptFiles = require('./handle-request-for-javascript-files')
const sendFile = require('./send-file')
const environment = require('server-common/environment')
jest.mock('./send-file')

describe('handleRequestForJavascriptFiles', () => {
  beforeEach(() => {
    sendFile.mockImplementation(() => {
      return Promise.resolve()
    })
  })

  describe('When the webpack bundle is requested', () => {
    it('Should respond with a bundle postfixed with gz when environment is production', async () => {
      environment.isProduction = true
      const mockReq = {
        url: '/bundle.js'
      }
      const mockRes = {
        set: jest.fn()
      }

      await handleRequestForJavascriptFiles(mockReq, mockRes)

      expect(mockRes.set.mock.calls[0]).toEqual(['Content-Encoding', 'gzip'])
      expect(sendFile.mock.calls[0][1]).toBe('/bundle.js.gz')
    })

    it('Should respond with a bundle postfixed with js when environment is development', async () => {
      environment.isProduction = false
      const mockReq = {
        url: '/bundle.js'
      }
      const mockRes = {
        set: jest.fn()
      }

      await handleRequestForJavascriptFiles(mockReq, mockRes)

      expect(mockRes.set.mock.calls.length).toBe(0)
      expect(sendFile.mock.calls[0][1]).toBe('/bundle.js.gz')
    })
  })
})
