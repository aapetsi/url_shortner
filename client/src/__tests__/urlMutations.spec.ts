import { mutations } from '../store/modules/urls'
import { UrlState } from '../types'

const {deleteUrl, deleteUrls, saveUrl, setSaveSuccess, setErrors, setFormError, setUrls} = mutations

describe('Test url mutations', () => {
  test('should set save success', () => {
    const state: UrlState = {
      urls: [],
      formError: '',
      errors: {},
      saveSuccess: false
    }

    setSaveSuccess(state, true)

    expect(state.saveSuccess).toBe(true)
  })

  test('should set form error', () => {
    const state: UrlState = {
      urls: [],
      formError: '',
      errors: {},
      saveSuccess: false
    }

    setFormError(state, 'Url is not in the correct format')

    expect(state.formError).toBeDefined()
    expect(state.formError).toBe('Url is not in the correct format')
  })

  test('should save url', () => {
    const state: UrlState = {
      urls: [],
      formError: '',
      errors: {},
      saveSuccess: false
    }
    let url = {
      _id: '5f479f8500a40403fe2d3a3e',
      originalUrl: 'www.google.com',
      shortUrl: 'https://pbid.io/abc12345',
      shortUrlHash: 'abc12345',
      dateCreated: '2020-08-27T11:56:53.052Z',
    __v: 0
    }

    saveUrl(state, url)
    
    expect(state.urls).toHaveLength(1)
    expect(state.urls).toContain(url)
  })

  test('should set errors', () => {
    const state: UrlState = {
      urls: [],
      formError: '',
      errors: {},
      saveSuccess: false
    }

    setErrors(state, {error: 'Url has already been saved'})
    
    expect(state.errors.error).toBeDefined()
    expect(state.errors.error).toBe('Url has already been saved')
  })

  test('should save fetched urls to state', () => {
    const state: UrlState = {
      urls: [],
      formError: '',
      errors: {},
      saveSuccess: false
    }

    let url = {
      _id: '5f479f8500a40403fe2d3a3e',
      originalUrl: 'www.google.com',
      shortUrl: 'https://pbid.io/abc12345',
      shortUrlHash: 'abc12345',
      dateCreated: '2020-08-27T11:56:53.052Z',
    __v: 0
    }

    setUrls(state, [url, url])
    
    expect(state.urls).toHaveLength(2)
  })

  test('should delete all urls', () => {
    const state = {
      urls: [
        {
          _id: '5f479f8500a40403fe2d3a3a',
          originalUrl: 'www.google.com',
          shortUrl: 'https://pbid.io/abc12345',
          shortUrlHash: 'abc12345',
          dateCreated: '2020-08-27T11:56:53.052Z',
        __v: 0
        },
        {
          _id: '5f479f8500a40403fe2d3a3b',
          originalUrl: 'www.google.com',
          shortUrl: 'https://pbid.io/abc12345',
          shortUrlHash: 'abc12345',
          dateCreated: '2020-08-27T11:56:53.052Z',
        __v: 0
        }
      ],
      formError: '',
      errors: {},
      saveSuccess: false
    }
    
    deleteUrls(state)

    expect(state.urls).toHaveLength(0)
  })

  test('should delete a single url', () => {
    const state = {
      urls: [
        {
          _id: '5f479f8500a40403fe2d3a3a',
          originalUrl: 'www.google.com',
          shortUrl: 'https://pbid.io/abc12345',
          shortUrlHash: 'abc12345',
          dateCreated: '2020-08-27T11:56:53.052Z',
        __v: 0
        },
        {
          _id: '5f479f8500a40403fe2d3a3b',
          originalUrl: 'www.google.com',
          shortUrl: 'https://pbid.io/abc12345',
          shortUrlHash: 'abc12345',
          dateCreated: '2020-08-27T11:56:53.052Z',
        __v: 0
        }
      ],
      formError: '',
      errors: {},
      saveSuccess: false
    }

    deleteUrl(state, '5f479f8500a40403fe2d3a3a')
    expect(state.urls).toHaveLength(1)
  })
})
