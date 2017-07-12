import { Education } from './education';
import { Help } from './help';
import { Lang } from './lang';
import { Mixer } from './mixer';
import { Pgp } from './pgp';
import { Projects } from './projects';
import { Ssh } from './ssh';
import { Time } from './time';

/**
 * The array of commands.
 */
export const commands = [
  new Help(),
  new Time(),
  new Lang(),
  new Education(),
  new Projects(),
  new Pgp(),
  new Ssh(),
  new Mixer(),
];
