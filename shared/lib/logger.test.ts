import { createLogger } from './logger'
import { vi, describe, it, expect } from 'vitest'

describe('Logger', () => {
  const consoleLog = vi.spyOn(console, 'log').mockImplementation(() => {})
  const consoleInfo = vi.spyOn(console, 'info').mockImplementation(() => {})
  const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

  const logger = createLogger()

  it('logs a message', () => {
    logger.log('test log')
    expect(consoleLog).toHaveBeenCalledWith('[LOG]: test log')
  })

  it('infos a message', () => {
    logger.info('test info')
    expect(consoleInfo).toHaveBeenCalledWith('[INFO]: test info')
  })

  it('warns a message', () => {
    logger.warn('test warn')
    expect(consoleWarn).toHaveBeenCalledWith('[WARN]: test warn')
  })

  it('errors a message', () => {
    logger.error('test error')
    expect(consoleError).toHaveBeenCalledWith('[ERROR]: test error')
  })
})
