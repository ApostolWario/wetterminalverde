import { Help } from './help';
import { Mixer } from './mixer';
import { Pgp } from './pgp';
import { Ssh } from './ssh';
import { Time } from './time';

/**
 * The array of commands.
 */
export const commands = [
  new Help(),
  new Pgp(),
  new Ssh(),
  new Time(),
  new Mixer(),
];
