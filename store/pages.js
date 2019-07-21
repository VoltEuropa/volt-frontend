
export const state = () => ({
  list: [],
});

export const mutations = {
  set(state, value) {
    state.list = value
  },
  add(state, value) {
    merge(state.list, value)
  },
  remove(state, { value }) {
    state.list.filter(v => value.id !== v.id)
  },
  mergeValues(state, form) {
    assign(state.value, form)
  },
  setValues(state, form) {
    state.value = form
  }
};


export const actions = {

  async get({ commit }) {

    let pages = [
      {
        "id": 1230,
        "slug": "lorem-ipsum",
        "title": "Loorem van Ipsum",
        "language": "nl",
        "meta": {
          "title": "Loorem van Ipsum SEO Title",
          "description": "Lekker Loorem van Ipsum",
          "og:image": "https://example.org/og-image.jpg",
          // ...
        },
        "fields": {
          // ...
        }
      },
      {
        "id": 1230,
        "slug": "lorem-ipsum",
        "title": "Loorem van Ipsum",
        "language": "nl",
        "meta": {
          "title": "Loorem van Ipsum SEO Title",
          "description": "Lekker Loorem van Ipsum",
          "og:image": "https://example.org/og-image.jpg",
          // ...
        },
        "fields": {
          // ...
        }
      },{
        "id": 1230,
        "slug": "lorem-ipsum",
        "title": "Loorem van Ipsum",
        "language": "en",
        "meta": {
          "title": "Loorem van Ipsum SEO Title",
          "description": "Lekker Loorem van Ipsum",
          "og:image": "https://example.org/og-image.jpg",
          // ...
        },
        "fields": {
          // ...
        }
      },{
        "id": 1230,
        "slug": "lorem-ipsum",
        "title": "Very English page",
        "language": "en",
        "meta": {
          "title": "Loorem van Ipsum SEO Title",
          "description": "Lekker Loorem van Ipsum",
          "og:image": "https://example.org/og-image.jpg",
          // ...
        },
        "fields": {
          // ...
        }
      },{
        "id": 1230,
        "slug": "lorem-ipsum",
        "title": "Lorem FRKN Ipsum",
        "language": "en",
        "meta": {
          "title": "Loorem van Ipsum SEO Title",
          "description": "Lekker Loorem van Ipsum",
          "og:image": "https://example.org/og-image.jpg",
          // ...
        },
        "fields": {
          // ...
        }
      },
    ]

    commit('set', pages)
  },
};

export const getters = {

  getByLanguage: (state) => (language) => {
    return state.list.filter(page => page.language == language)
  },

  getBySlug: (state) => (slug) => {
    return state.list.filter(page => page.slug == slug)
  }

}
