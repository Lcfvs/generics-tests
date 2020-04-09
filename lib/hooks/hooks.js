import hooks from '@lcf.vs/generics/lib/express/hooks/hooks.js'
import trace from '@lcf.vs/generics/lib/utils/trace.js'
import config from '../../generics.config.js'

export default trace({
  ...hooks,
  lib: {
  }
}, config.hooks)
