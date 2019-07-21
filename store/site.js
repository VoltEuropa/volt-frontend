
export const state = () => ({
  site: null
});

export const mutations = {

  set(state, site) {
    state.site = site
  },

};



export const actions = {

  async nuxtServerInit({ commit, dispatch }, { req }) {
    console.log(req.headers);
    await dispatch('get')
  },

  // axios...
  async get({ commit }) {

    let site = {
      "meta": {
        // tbd
      },
      "menus": {
        "header": [
          {
            "slug": "loremipsum",
            "site_id": 1,
            "nl": {
              "id": 1230,
              "title": "Loorem van Ipsum"
            },
            "fr": {
              "id": 1231,
              "title": "Lourem d’Ipsée"
            }
          },
          {
            "slug": "dolor-sic-amet",
            "site_id": 1,
            "nl": {
              "id": 7890,
              "title": "Doloor Sic Amet"
            },
            "fr": {
              "id": 7891,
              "title": "Douleur Sic Amète"
            },
            "children": [
              {
                "nl": {
                  "id": 7892,
                  "title": "Doloor Sic Sub"
                },
                "fr": {
                  "id": 7893,
                  "title": "Douleur Sic Amète Sub"
                }
              },
              // ...
            ]
          },
          // ...
        ],
        "footer": [
          // ...
        ]
      },
      "pages": [
        {
          "slug": "lorem-ipsum",
          "site_id": 1,
          "type": "page",
          "nl": {
            "id": 1230,
            "title": "Loorem van Ipsum"
          },
          "fr": {
            "id": 1231,
            "title": "Lourem d’Ipsée"
          }
        },
        // ...
      ],
      "events": [
        {
          "slug": "lala"
        }
      ]
    }
    
    commit('set', site)

  },
};

export const getters = {

  get: (state) => (language) => {
    return state.list.filter(page => page.language == language)
  }

}
