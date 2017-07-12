import { Help } from './help';
import { Lang } from './lang';
import { Mixer } from './mixer';
import { Pgp } from './pgp';
import { Ssh } from './ssh';
import { Time } from './time';

/**
 * The array of commands.
 */
export const commands = [
  new Help(),
  new Time(),
  new Lang(),
  new Pgp(),
  new Ssh(),
  new Mixer(),
];
