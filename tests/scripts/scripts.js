import tester from '@lcf.vs/generics/lib/tester/tester.js'
import events from './events/events.js'
import index from './index/index.js'

const tests = [
  index.home,
  events.subscribe,
  events.create,
  events.update,
  events.find,
  events.search,
  events.archive
]

export default async function scripts (depth = 3) {
  return tester.test(tests, depth)
}
