import { groq } from '@nuxtjs/sanity'

const api = ($sanity) => ({
  getPosts({ skip = 0, limit = 200, order = '_createdAt desc' } = {}) {
    const query = groq`
      {
        "posts":
          *[_type == "post"]|order(${order})[${skip}...${skip + limit}] {
            title,
            slug,
            excerpt,
            _createdAt,
            _updatedAt,
            mainImage,
            author->,
            ...
         },
        "total": count(*[_type == "post"]) 
      }
    `
    return $sanity.fetch(query)
  },
  getPost(slug) {
    const query = groq`
      *[_type == "post" && slug.current == "${slug}"][0]{
        author->,
        ...
      }
    `
    return $sanity.fetch(query)
  },
})

export default ({ $sanity }, inject) => {
  inject('api', api($sanity))
}
