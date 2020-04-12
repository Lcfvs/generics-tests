export default ({
  renderer,
  templates = {}
}) => ({
  display: [
    renderer(context => context, templates.display)
  ]
})
