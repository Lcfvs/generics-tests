import hooks from '../../../hooks/hooks.js'

export default ({
  templates
}) => ({
  display: [
    hooks.request.xhr(),
    hooks.response.viewer(() => ({ body: {} })),
    hooks.response.renderer(templates.display)
  ]
})
