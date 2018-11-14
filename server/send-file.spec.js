const sendFile = require('./send-file')
const path = require('path')

describe('sendFile', () => {
  let mockSendFile = jest.fn((_url, resolvingCallback) => {
    resolvingCallback()
  })
  let mockResponse

  beforeEach(() => {
    mockResponse = {
      sendFile: mockSendFile
    }
  })

  it('Should call response.sendFile once', async () => {
    await sendFile(mockResponse, '/url/path')
    expect(mockSendFile.mock.calls.length).toBe(1)
  })

  it('Should modify the url to start from the root folder', async () => {
    await sendFile(mockResponse, '/url/path')
    expect(mockSendFile.mock.calls[0][0]).toBe(
      path.join(__dirname + './../url/path')
    )
  })

  it('Should throw an error when there is an issue', async () => {
    const errorHasHappened = 'error message'
    const mockErrorResponse = {
      sendFile: (url, resolvingCallback) => {
        resolvingCallback(errorHasHappened)
      }
    }

    try {
      await sendFile(mockErrorResponse, '/url/path')
    } catch (err) {
      expect(err).toBe(errorHasHappened)
    }
  })
})
