import hooks from '@lcf.vs/generics/lib/express/hooks/hooks.js'
import parsers from '@lcf.vs/generics/lib/validation/parsers/parsers.js'

export default {
  hooks: {
    depth: null,
    name: 'hooks',
    logger: hooks.log.logger
  },
  parsers: {
    depth: null,
    name: 'parsers',
    logger: parsers.log.logger
  }
}
