export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-2e25198a","v-1303aad4","v-ef7dd9f0","v-19d5c30e","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690","v-74bc627b","v-7e25fb5f","v-7d72c4ac","v-14f73021","v-71d3dd4a"]},"/en/":{"path":"/en/article/","keys":["v-50a4c495"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]},"/en/":{"path":"/en/slide/","keys":["v-50a4c495"]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84","v-5deafbd7","v-0c0c61ab","v-0538ff2f"]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2e25198a","v-1303aad4","v-ef7dd9f0","v-19d5c30e","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690","v-4eaf9f84"]},"/en/":{"path":"/en/timeline/","keys":["v-50a4c495"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
