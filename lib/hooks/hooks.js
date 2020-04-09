import hooks from '@lcf.vs/generics/lib/express/hooks/hooks.js'
import trace from '@lcf.vs/generics/lib/utils/trace.js'
import rendering from './rendering/rendering.js'
import config from '../../generics.config.js'

export default {
  ...trace({
    ...hooks,
    rendering
  }, config.hooks)
}
