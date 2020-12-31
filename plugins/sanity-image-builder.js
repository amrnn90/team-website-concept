import imageUrlBuilder from '@sanity/image-url'

export default ({ $sanity }, inject) => {
  const builder = imageUrlBuilder($sanity.config)
  function imgFor(source) {
    return builder.image(source).auto('format')
  }
  inject('imgFor', imgFor)
}
