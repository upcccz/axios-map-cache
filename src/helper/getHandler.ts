import { Target } from '../utils';
import applyHandler from './applyHandler';

export default function getHandlers (target: Target, propKey: string, receiver: Target) {
  // 代理别名方法 .request .get .post .delete ...
  return new Proxy(Reflect.get(target, propKey), {
    apply(target, ctx, args) {
      return applyHandler(target, ctx, args, receiver, propKey)
    }
  })
}